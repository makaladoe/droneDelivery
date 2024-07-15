import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo vector icons

const SideScreen = () => {
  const [isSideScreenOpen, setIsSideScreenOpen] = useState(false);
  const sideScreenWidth = 250;
  const animatedValue = useState(new Animated.Value(0))[0]; // Set initial value to 0

  const toggleSideScreen = () => {
    setIsSideScreenOpen(!isSideScreenOpen);
    Animated.timing(animatedValue, {
      toValue: isSideScreenOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-sideScreenWidth, 0],
  });

  // Sample list of services
  const services = [
    { id: 1, name: 'Service 1' },
    { id: 2, name: 'Service 2' },
    { id: 3, name: 'Service 3' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSideScreen} style={styles.menuButton}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>

      {/* Side screen content */}
      <Animated.View style={[styles.sideScreen, { transform: [{ translateX }] }]}>
        <TouchableOpacity onPress={toggleSideScreen} style={styles.closeButton}>
          <Text>Close</Text>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Services Offered</Text>
        {services.map(service => (
          <Text key={service.id} style={styles.serviceItem}>{service.name}</Text>
        ))}
      </Animated.View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  menuButton: {
    padding: 10,
    marginRight: 10,
  },
  sideScreen: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    zIndex: 100,
    elevation: 5, // For Android elevation
    paddingTop: 50, // Adjust according to your header height
    paddingLeft: 20,
  },
  closeButton: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceItem: {
    marginBottom: 5,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SideScreen;
