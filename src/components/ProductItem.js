import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { products } from '../data/products';

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image 
    source={{uri: item.images[0] }}
    height={80}
    width={80}
    style={styles.image}
    
    />
      <Text style={styles.text}> {item.title} </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.heavyColor,
        borderRadius: 10,
        borderWidth: 1,
        height: 100,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },

    text: {
        fontSize: 20,
        fontWeight: "600",
        marginRight: 20,

    },

    image: {
        marginLeft: 10,
    }
})

export default ProductItem; 