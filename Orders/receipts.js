import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { Picker } from '@react-native-picker/picker'; // Import Picker component

const Receipt = ({ location }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentRef, setPaymentRef] = useState('');
  const [receiptNumber, setReceiptNumber] = useState('');
  const [selectedOrder, setSelectedOrder] = useState('');

  const navigation = useNavigation(); // Initialize navigation

  const orderOptions = [
    'Medicine',
    'Sample Tests',
    'Medical Clothes',
    'Gloves',
    'Emergency Kit'
  ];

  const generateReceiptNumber = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 8;
    let generatedNumber = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedNumber += characters[randomIndex];
    }
    setReceiptNumber(generatedNumber);
  };

  const handleSubmit = () => {
    // Navigate to viewOrders screen and pass receipt data as params
    navigation.navigate('viewOrders', {
      name,
      phone,
      location,
      selectedOrder,
      paymentRef,
      receiptNumber
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={setPhone}
        value={phone}
      />
      <Picker
        selectedValue={selectedOrder}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setSelectedOrder(itemValue)}
      >
        <Picker.Item label="Select Order" value="" />
        {orderOptions.map((option, index) => (
          <Picker.Item label={option} value={option} key={index} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Payment Reference"
        onChangeText={setPaymentRef}
        value={paymentRef}
      />
      <TextInput
        style={styles.input}
        placeholder="Receipt Number"
        value={receiptNumber}
        editable={false}
      />
      <Button title="Generate Receipt Number" onPress={generateReceiptNumber} />
      <Button title="Generate Receipt" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
});

export default Receipt;
