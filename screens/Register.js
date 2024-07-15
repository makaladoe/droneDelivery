// RegistrationScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully!');
      // Navigate to the next screen or perform any other action
      navigation.navigate('Home'); // Replace 'Home' with the name of your desired screen
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Failed to register. Please try again later.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
};

export default RegistrationScreen;
