import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { products } from '../data/products';
import { useWindowDimensions, useDispatch } from 'react-native';

const ProductItem = ({ item, navigation }) => {
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

  const handleProductSelect = () => {
    dispatch(setProductSelected(item.title));
    navigation.navigate("productDetail");
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: item.images[0] }}
        height={80}
        width={80}
        style={styles.image}
      />
    <Pressable onPress={handleProductSelect()}>
      <Text style={styles.text}> {item.title} </Text>
    </Pressable>  
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.white,
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