import {useState, useEffect} from 'react'
import {View, Pressable, StyleSheet} from 'react-native'
import { Text } from './Text'


export const ButtonSelector = ({options, onSelect}) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectOption = (value) => {
        const selected = options.find((item) => item.value == value);
        if(selected) {
            setSelectedOption(selected);
        }
    }

    useEffect( () => {
        onSelect(selectedOption)
    },[selectedOption])
    

    return (
        <View style={{width: "90%", backgroundColor: "white", flexDirection: "row", gap: 10}}>
            {
                options.map((option) => {
                    return (selectedOption.value == option.value ?
                        <Pressable key={option.value} style={{...styles.button, ...styles.selectedButton}} onPress={() => handleSelectOption(option.value)}>
                            <Text style={{...styles.buttonText,...styles.selectedButtonText}} >{option.text}</Text>
                        </Pressable>
                        :
                        <Pressable key={option.value} style={styles.button} onPress={() => handleSelectOption(option.value)}>
                            <Text style={styles.buttonText} >{option.text}</Text>
                        </Pressable>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        borderColor: "#00C0F0",
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        justifyContent: "center"
    },
    buttonText: {
        color: "#00C0F0",
        fontSize: 12
    },
    selectedButton: {
        backgroundColor: "#00C0F0",
        borderWidth: 0

    },
    selectedButtonText: {
        color: "#fff"
    }
});