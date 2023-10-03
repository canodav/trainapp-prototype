import { View, StyleSheet, Pressable } from "react-native"
import { Text } from "./Text"

export const SmallCard = () => {

    return (
        <View style={{...styles.card, width: "90%", elevation: 0, gap: 20, paddingHorizontal: 20, paddingVertical: 16, elevation: 4, backgroundColor: "#fff"}}>
            <View style={{flexDirection: 'row', alignItems: "center"}}>
                <View style={ {flex: 1}}>
                    <Text  style={{...styles.cardText, fontSize:50, lineHeight: 70}}>10:52</Text>
                </View>
                <View style={ {flex: 1}}>
                    <Text style={{...styles.cardText, textAlign: 'right', fontSize: 15}}>Clot - Premia de Mar</Text>
                    <Text style={{...styles.cardText, textAlign: 'right', fontSize: 20}}>25 min</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8
    },
    cardText: {
        color: "#000"
    },
    button: {
        backgroundColor: "#fff",
        paddingHorizontal: 35,
        paddingVertical: 10,
        borderRadius: 8
    },
    buttonText: {
        fontSize: 14
    }

})