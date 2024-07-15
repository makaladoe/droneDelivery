// OrderSummary.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OrderSummary = ({ orders }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text>{item.name}</Text>
            {/* Add other details of the order */}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
  },
});

export default OrderSummary;
