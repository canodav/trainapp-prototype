import React, { useState, useEffect, useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Main } from "./src/components/Main"


import {
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';



export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);


  useEffect(() => {

    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Poppins_700Bold, Poppins_500Medium });
      } catch (e) {
        console.log("a");
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);


  if (!appIsReady) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayout}>
        <NavigationContainer >
        <Main />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
  buttons_container:{
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10
  },
  button : {
    padding: 20,
    backgroundColor: "#bbb"
  },
  
});