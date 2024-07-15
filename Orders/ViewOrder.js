import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, Linking } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import firebase from 'firebase/compat/app';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const ViewOrders = ({ route }) => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    if (!firebaseInitialized) {
      if (!firebase.apps.length) {
        initializeApp(firebaseConfig);
        setFirebaseInitialized(true);
      } else {
        firebase.app();
        setFirebaseInitialized(true);
      }
    }
  }, [firebaseInitialized]);

  const { name, phone, location, selectedOrder, paymentRef, receiptNumber } = route.params;

  const handlePayWithMpesa = () => {
    const mpesaPaymentUrl = 'YOUR_MPESA_PAYMENT_URL';
    Linking.openURL(mpesaPaymentUrl);
  };

  const handleSaveReceipt = () => {
    if (firebaseInitialized) {
      saveReceiptToFirebase();
    } else {
      console.error('Firebase is not initialized');
    }
  };

  const saveReceiptToFirebase = () => {
    // Log receipt details to console
    console.log("Receipt Details:");
    console.log("Name:", name);
    console.log("Phone Number:", phone);
    console.log("Location:", location);
    console.log("Selected Order:", selectedOrder);
    console.log("Payment Reference:", paymentRef);
    console.log("Receipt Number:", receiptNumber);

    const database = getDatabase();
    const receiptRef = push(ref(database, 'receipts'));
    set(receiptRef, {
      name,
      phone,
      location,
      selectedOrder,
      paymentRef,
      receiptNumber
    }).then(() => {
      Alert.alert('Receipt Saved', 'Receipt has been saved successfully.');
    }).catch(error => {
      console.error('Failed to save receipt:', error);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{name}</Text>

      <Text style={styles.label}>Phone Number:</Text>
      <Text style={styles.text}>{phone}</Text>

      <Text style={styles.label}>Location:</Text>
      <Text style={styles.text}>{location}</Text>

      <Text style={styles.label}>Selected Order:</Text>
      <Text style={styles.text}>{selectedOrder}</Text>

      <Text style={styles.label}>Payment Reference:</Text>
      <Text style={styles.text}>{paymentRef}</Text>

      <Text style={styles.label}>Receipt Number:</Text>
      <Text style={styles.text}>{receiptNumber}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Pay with M-Pesa" onPress={handlePayWithMpesa} />
        <Button title="Save Receipt" onPress={handleSaveReceipt} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default ViewOrders;
