import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Header } from "./Header";
import { Home } from "./Home"
import { Map } from "./Map"


const Tab = createBottomTabNavigator();

const TabBarIcon = ({ iconName, color, size, isFocused }) => {
    const iconColor = isFocused ? "#fff" : color; 
    const iconSize = size ;

    return (
        <View style={isFocused ? styles.tabIconFocused : styles.tabIcon}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
        </View>
    );
};

export const Main = () => {
    return (
      <View style={{ flex: 1, }}>
   
        <Header />
    
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderColor: "#fff", 
                height: 70
            },
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              let ionicIcon = true;
              let iconName: any = 'basketball';
            
              color = "#393939";
  
              switch (route.name) {
                case 'Home':
                  ionicIcon = true;
                  iconName = 'home-sharp';

                  break;
                case 'Map':
                  ionicIcon = true;
                  iconName = 'map'
                  break;
                
              }
                return <TabBarIcon
                iconName={iconName}
                color={color}
                size={size}
                isFocused={focused}
              />
            }
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Map" component={Map} />

        </Tab.Navigator>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      backgroundColor: "#fff"
    },
    tabIcon: {
        alignItems: "center",
        justifyContent: "center",
      },
      tabIconFocused: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00A0D3",
        padding: 10,
        aspectRatio: 1,
        borderRadius: 10000, 
      },
  });
  