import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Platform, PermissionsAndroid } from 'react-native';
import TouchID from 'react-native-touch-id';

const RegisterScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    async function checkPermission() {
      try {
        if (Platform.OS === 'android') {
          const permission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.USE_FINGERPRINT
          );
          console.log('Permission:', permission);
          setHasPermission(permission);
        } else {
          // iOS doesn't require explicit permission
          setHasPermission(true);
        }
      } catch (error) {
        console.error('Error checking permission:', error);
      }
    }

    checkPermission();
  }, []);

  const requestPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.USE_FINGERPRINT,
          {
            title: 'Fingerprint Permission',
            message: 'This app needs access to your fingerprint to register it.',
          }
        );
        console.log('Permission granted:', granted);
        setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const registerFingerprint = () => {
    if (!hasPermission) {
      requestPermission();
      return;
    }

    TouchID.isSupported()
      .then(() => {
        TouchID.authenticate('Scan your fingerprint to register', { title: 'Register Fingerprint' })
          .then(() => {
            alert('Fingerprint registered successfully!');
          })
          .catch(error => {
            console.log(error);
            alert('Failed to register fingerprint.');
          });
      })
      .catch(() => {
        alert('Fingerprint not supported on this device.');
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Register Fingerprint" onPress={registerFingerprint} />
      <Button title="Authenticate" onPress={() => navigation.navigate('Auth')} />
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

export default RegisterScreen;
