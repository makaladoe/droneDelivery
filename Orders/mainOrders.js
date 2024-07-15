import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Order from './ordering';
import {LocationAccuracy} from 'expo-location';
import LocationComponent from '../location';

const MainOrders = ( {navigation}) => {
  return (
	
    <View style={styles.container}>
      <Text style={styles.heading}>Make your orders</Text>
	  <LocationComponent/>

    </View>
	
	
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button : {
	
    backgroundColor: '#184E77',
    padding: 12,
    paddingHorizontal:16,
    borderRadius:16,
    marginBottom : 30,
  
  },
  buttonText: {
    fontSize : 18,
    fontWeight: '600',
    color: 'white',
    
  },
});

export default MainOrders;


