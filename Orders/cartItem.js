// CartItem.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <View style={styles.cartItemContainer}>
      <Text>{item.name}</Text>
      <Button title="Remove" onPress={() => removeFromCart(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default CartItem;
