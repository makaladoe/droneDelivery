import React, { useState } from 'react';
import { View, Button, Text, StyleSheet , FlatList, Touchable } from 'react-native';
import OrderHistory from './orderHistory';
import ItemList from './itemList';
import CartItem from './cartItem';
import OrderSummary from './orderSummary';
import ReceiptGenerator from './receipts';
import Receipt from './receipts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DisReceipt from '../screens/receiptScreen';


const Order = ( {navigation}) => {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([
    { id: 1, name: 'Medicine', price: 10 },
    { id: 2, name: 'Medical Gear', price: 20 },
    { id: 3, name: 'Tools', price: 30 },
	{ id: 4, name: 'Test Samples', price: 30 },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
  };

  const placeOrder = () => {
    setOrders([...orders, ...cartItems]);
    setCartItems([]);
    setOrderPlaced(true);
  };

  const continueShopping = () => {
    setOrderPlaced(false);
  };

  return (
    <View style={styles.container}>
      {/* Display items and cart */}
      <ItemList items={items} addToCart={addToCart} />
      <Text style={styles.cartTitle}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} removeFromCart={removeFromCart} />}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Place order button */}
      <View style={styles.orderButtonContainer}>
        <Button
          title={`Place Order (${cartItems.length} items)`}
          onPress={placeOrder}
          disabled={cartItems.length === 0}
        />
      </View>

      {/* Display confirmation message */}
      {orderPlaced && (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>Order placed successfully!</Text>
          <Button title="Continue Shopping" onPress={continueShopping} />
        </View>
      )}

      {/* Display order history */}
      
	  <OrderSummary orders={orders}/>

    <View>
    
    </View>
    

    
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  // Other styles...
});

export default Order;
