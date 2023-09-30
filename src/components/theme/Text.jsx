import { Text as RNText, StyleSheet } from "react-native"


export const Text = ({children, style, fontWeight = "bold"}) => {
    const fontStyle = fontWeight === "bold" ? RNstyles.textBold : RNstyles.textMedium;
    const combinedStyles = { ...RNstyles.text, ...fontStyle, ...style };
    return (
        <RNText style={ combinedStyles}>
            {children}
        </RNText>
    )
}


const RNstyles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    textBold: {
        fontFamily: 'Poppins_700Bold',
    },
    textMedium: {
        fontFamily: 'Poppins_500Medium',
    }
})