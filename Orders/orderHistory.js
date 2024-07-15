// OrderHistory.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OrderHistory = ({ orders }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
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

export default OrderHistory;
