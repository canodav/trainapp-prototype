import { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text } from './theme/Text'
import { MaterialCommunityIcons } from '@expo/vector-icons';



export const SelectInput = ({data, placeholder, label, onSelect}) => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [isListVisible, setIsListVisible] = useState(false);

    // Scroll to selected item
    const scrollViewRef = useRef(null);

    const scrollToSelectedItem = () => {
        if (!scrollViewRef || !scrollViewRef.current) return;
    
        const selectedItemIndex = data.findIndex(
          (data) => data.name === selectedItem?.name
        );
    
        if (selectedItemIndex !== -1) {
          const offset = selectedItemIndex * 30; 
          scrollViewRef.current.scrollTo({ y: offset, animated: true });
        }
    };


    useEffect(() => {
        scrollToSelectedItem();
        onSelect(selectedItem)
    }, [selectedItem])

    // Visibility of the list
    
    const handlePress = () => {
        setIsListVisible(!isListVisible);
        setTimeout(() => {
            scrollToSelectedItem();
        }, 0);
    }   

    const handleSelectItem = (name) => {
        const selected = data.find((item) => item.name == name);
        if(selected) setSelectedItem(selected);
        setIsListVisible(false);
    }

    return (
        <View  style={{position: 'relative', width: "90%"}}>
        <Pressable onPress={handlePress} style={{
            backgroundColor: "#e9e9e9", 
            height: 40, borderRadius: 8, 
            alignItems: "center", 
            paddingHorizontal: 10,
            flexDirection: 'row',
            }}>
            { selectedItem ?
            <View style={styles.textContainer}>
                <Text style={styles.labelText} fontWeight='medium' >{label}</Text>
                <Text style={styles.spanText} fontWeight='bold'>{selectedItem.name}</Text>
            </View>
            :
            <View style={styles.textContainer}>
                <Text style={styles.placeholderText} fontWeight='medium' >{placeholder}</Text>
            </View>
            }
            <MaterialCommunityIcons name="pencil" size={20} color="#999" />
        </Pressable>
        {isListVisible && ( 
            <GestureHandlerRootView style={{ position: 'absolute', top: 50, left: 0, backgroundColor: "#fff" , width: "100%" , height: 500, zIndex: 1, elevation: 10, padding: 10, borderRadius: 10}}>
                <ScrollView ref={scrollViewRef} >
                    {
                        data.map((item) => {
                            return (
                                <Pressable style={{paddingVertical: 3}} key={item.name} onPress={() => handleSelectItem(item.name)}>
                                    {item.name == selectedItem?.name ? 
                                    <Text style={{color: "#00A0D3"}}>{item.name}</Text>
                                    : 
                                    <Text>{item.name}</Text>
                                    }
                                </Pressable>
                            )
                        })
                    }
                </ScrollView>
            </GestureHandlerRootView> 
            )}
        </View>

    );
}

const styles = StyleSheet.create({

    textContainer: {
        width: "90%",
        backgroundColor: "#e9e9e9",
        height: 40,
        borderRadius: 8,
        flexDirection: "row", 
        alignItems: "center", 
    },
    placeholderText: {
        color: "#999",
        fontSize: 12,
        lineHeight: 20
    },
    labelText: {
        fontSize: 12,
        lineHeight: 20
    },
    spanText: {
        fontSize: 12,
        lineHeight: 20
    },
})