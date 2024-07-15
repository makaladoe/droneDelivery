import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import Receipt from './Orders/receipts';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(`${coords.latitude}, ${coords.longitude}`);
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <Receipt location={location} /> // Pass the location to the Receipt component
      )}
    </View>
  );
};

export default LocationComponent;
