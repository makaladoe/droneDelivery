import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View , TouchableOpacity} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { useState } from "react";
import Quiz from "./quiz";
import React from "react";

const  AppFinger  = ({ navigation })  => {
  const [authenticated, setAuthenticated] = useState(false);

  const checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    console.log("compatible", compatible);
  };

  const checkForBiometrics = async () => {
    let biometricRecords = await LocalAuthentication.isEnrolledAsync();
    console.log("biometricRecords", biometricRecords);
  };

  const authenticate = async () => {
    let result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      setAuthenticated(true);
      
      
    } else {
      Alert.alert("Authentication failed");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>
        Welcome To MediDrones, Your Best AI agent
      </Text>
      
      <Button
        title={authenticated ? "Back" : "Authenticate With FingerPrint"}
        onPress={() =>  {
          if (authenticated) {
            setAuthenticated(false);
            return;
          }
          checkDeviceForHardware();
          checkForBiometrics();
          authenticate();
        }}
      />
      {authenticated && (
        <View>
          <Text>
           
          </Text>
        </View>

       
      )}
      <View></View>
    </View>
  );
};

export default AppFinger;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "blue",
  },
});
