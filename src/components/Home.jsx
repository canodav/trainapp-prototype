import {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from './theme/Text';
import * as Location from 'expo-location';
import { findNearest } from 'geolib';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SelectInput } from './SelectInput';
import { Header } from './Header';
import { Card } from './theme/Card';
import { SmallCard } from './theme/SmallCard';


import { stations } from '../train_stations';
import { ButtonSelector } from './theme/ButtonSelector';

export const Home = () => {
  const [selectedDepartureStation, setSelectedDepartureStation] = useState(stations[0])
  const [selectedArrivalStation, setSelectedArrivalStation] = useState(stations.at(-1))
  const [selectedDirection, setSelectedDirection] = useState(null);
  console.log(stations)
  console.log(selectedDepartureStation);
  console.log(selectedArrivalStation);


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
        <View style={{backgroundColor: "#fff", flex: 1, gap: 20, flexDirection: "column", alignItems: "center"}}>
          <View style={{gap: 10}}>
          <SelectInput label={"Nearest station: "} placeholder={"Where are you?"} data={stations} onSelect={setSelectedDepartureStation}></SelectInput>            
          <SelectInput label={""} placeholder={"Where dow you want to go?"} data={stations} onSelect={setSelectedArrivalStation}></SelectInput>
          </View>
          <ButtonSelector onSelect={setSelectedDirection} options={[
            {
              text: "Both direction",
              value: "both"
            },
            {
              text: "Departure",
              value: "departure"
            }
          ]} />         
          <Card fromStation={selectedDepartureStation} toStation={selectedArrivalStation}></Card>
          <SmallCard ></SmallCard>
          <SmallCard></SmallCard>

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

})