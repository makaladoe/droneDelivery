import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';

const WelcomeScreen = ( {navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate("Quiz")}  style= {styles.button}>
					<Text  style = { styles.buttonText}> Welcome In </Text>
				</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default WelcomeScreen;
