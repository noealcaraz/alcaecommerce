import { View, Text, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React from 'react'

import Header from '../components/Header';

import { useSelector } from 'react-redux';

const ProductDetail = ({ navigation, route }) => {

    const productSelected = useSelector(
      (state) => state.homeSlice.productSelected
    ); 

  return (
    <SafeAreaView>
      <Header title = "Detalle" navigation={navigation} />
      
      <View style = {styles.containerImage}>
        <Image 
          style = {styles.image}
          source={{
          uri: productSelected.images[0],
        }}
        />
        <View 
          style={{flexDirection: "row", alignItems: "center"}}
        >
          <Text style={styles.title}> {productSelected.title} </Text>
        </View>
        <Text style={styles.precio}> ${productSelected.price} </Text>
        <Text style={styles.description}> {productSelected.description} </Text>
        <Text style={styles.description}> Rating: {productSelected.rating} </Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 30,
        height: 350,
        width: 350,
    },

    containerImage: {
        alignItems: "center",
    },

    title: {
        fontSize: 30,
        fontFamily: "Cantarell",
        fontWeight: "900",
        marginTop: 25,
    },

    description: {
        fontSize: 20,
        marginTop: 12,
        marginBottom: 30,
        marginHorizontal: 10,
    },

    precio: {
      fontSize: 28,
      padding: 20,
      fontFamily: "Montserrat",
    },
});

export default ProductDetail;