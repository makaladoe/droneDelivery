import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OrderSummary from './orderSummary';

const final = () => {
  return (
    <View style={styles.container}>
      <OrderSummary/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default final;


