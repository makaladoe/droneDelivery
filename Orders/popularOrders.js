import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const MultipleImages = () => {
  return (
    <View>
    <View style={styles.container}>
      <Image source={require ('../assets/medicine.png')} style={styles.image} />
<Image source={require ('../assets/surgery.png')} style={styles.image} />
<Image source={require ('../assets/gloves.png')} style={styles.image} />
    </View>
    <View style = { styles.container}>
    <Image source={require ('../assets/dress.png')} style={styles.image} />
<Image source={require ('../assets/blood.png')} style={styles.image} />
<Image source={require ('../assets/dna.png')} style={styles.image} />
    </View>

  
    </View>
    
    
    
  
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
  },

});

export default MultipleImages;
