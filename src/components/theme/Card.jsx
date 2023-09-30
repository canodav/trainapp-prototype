import { View, StyleSheet } from "react-native"

export const Card = ({children, color}) => {

    return (
        <View style={{...styles.card}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: "#000",
        borderWidth: 2
    },
    lightCard: {

    },
    primaryCard: {

    }
})