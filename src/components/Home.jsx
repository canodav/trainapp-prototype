import { View, StyleSheet } from 'react-native'
import { Text } from './theme/Text';
import { stations } from '../train_stations'
import * as Location from 'expo-location';
import { findNearest } from 'geolib';
import { Header } from './Header';
import { Card } from './theme/Card';

export const Home = () => {

    /*

  const fetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    //const [statusBackground, requestPermission] = Location.requestBackgroundPermissionsAsync();


    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("sending location");
    } catch (error) {
      setErrorMsg('Error fetching location: ' + error.message);
    }
  };

  useEffect(() => {
    fetchLocation();

    const intervalId = setInterval(fetchLocation, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if(!location) return;

    const nearest = findNearest({latitude : location.coords.latitude, longitude: location.coords.longitude}, stations.map(station => station.coords));
  
    var result = stations.find(station => {
      return station.coords.latitude == nearest.latitude && station.coords.longitude == nearest.longitude
    })
    setNearestStation(result);

  }, [location])
*/
    return (
        <View style={{backgroundColor: "#fff", flex: 1, flexDirection: "column", alignItems: "center"}}>
            <View style={{
              width: "90%", 
              backgroundColor: "#e9e9e9", 
              height: 40, borderRadius: 8, 
              justifyContent: "center", 
              paddingHorizontal: 10}}>
                <View style={styles.textContainer}>
                  <Text style={styles.labelText} fontWeight='medium' >Nearest station: </Text>
                  <Text style={styles.spanText} fontWeight='bold'>{"Barcelona - Clot Aragó"}</Text>
                </View>
            </View>
           
             {/*
      { nearestStation &&
        <Text style={styles.paragraph}>La estació mes propera a la teva ubicació es: {nearestStation.name}</Text>
      }
      <View style={styles.buttons_container}>
        <Pressable style={styles.button}>
          <Text style={styles.button_text}>The train has arrived - Start Trip</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.button_text}>The train is late</Text>
        </Pressable>
      </View>
    */}
        </View>
    ); 
}


const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "90%",
    backgroundColor: "#e9e9e9",
    height: 40,
    borderRadius: 8,
    flexDirection: "row", 
    alignItems: "center", 
    paddingHorizontal: 10,
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