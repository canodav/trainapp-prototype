import Constants from "expo-constants";

import { View , StyleSheet } from "react-native";
import { Text } from "./theme/Text"
import Ionicons from '@expo/vector-icons/Ionicons';


const HeaderTab = ({iconName, isVisible = true}) => {
    return (
        <View style={[styles.tab, !isVisible && {opacity: 0}]}>
            <Ionicons name={iconName} size={20} color={'#fff'}/>
        </View>
    )
}

export const Header = () => {
    return (
        <View style={styles.container}>
            <HeaderTab iconName={'settings-sharp'} isVisible={false} />
            <Text style={{fontSize: 30}}>TRAINSYNC</Text>
            <HeaderTab iconName={'settings-sharp'}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 10,
        backgroundColor: "#fff",
    },
    tab: {
        marginHorizontal: 20,
    },
    logo: {
        width: 100,
        objectFit: "contain"
    }

})