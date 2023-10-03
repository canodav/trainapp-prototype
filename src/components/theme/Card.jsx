import { View, StyleSheet, Pressable } from "react-native"
import { Text } from "./Text"
import { LinearGradient } from "expo-linear-gradient"

export const Card = ({fromStation, toStation}) => {

    return (
        <View  style={{...styles.card, width: "90%", elevation: 1 }}>
            <LinearGradient style={{gap: 20, borderRadius: 8, padding: 20}} colors={['#00C0F0', '#00B4E0']}>
                <View style={{flexDirection: 'row'}}>
                    <View style={ {flex: 1}}>
                        <Text style={{...styles.cardText, fontSize: 20}}>NEXT TRAIN:</Text>
                        <Text style={{...styles.cardText, fontSize:60, lineHeight: 70}}>10:30</Text>
                    </View>
                    <View style={ {flex: 1}}>
                        <Text style={{...styles.cardText, textAlign: 'right', fontSize: 15}}>{fromStation?.name } - {toStation?.name}</Text>
                        <Text style={{...styles.cardText, textAlign: 'right', fontSize: 20, marginTop: 5}}>3 min</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: "center", gap: 15}}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Has arrived?</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Not arrived</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
    },
    cardText: {
        color: "#fff"
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