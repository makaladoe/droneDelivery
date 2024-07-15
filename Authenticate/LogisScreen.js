import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TouchID from 'react-native-touch-id';

const AuthScreen = () => {
  const authenticateFingerprint = () => {
    TouchID.isSupported()
      .then(() => {
        TouchID.authenticate('Scan your fingerprint to authenticate', { title: 'Authenticate with Fingerprint' })
          .then(() => {
            alert('Fingerprint authenticated successfully!');
          })
          .catch(error => {
            console.log(error);
            alert('Authentication failed.');
          });
      })
      .catch(() => {
        alert('Fingerprint not supported on this device.');
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Authenticate with Fingerprint" onPress={authenticateFingerprint} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;
