// ItemList.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const ItemList = ({ items, addToCart }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default ItemList;
