import { View, Text, Image, StyleSheet, Button, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { products } from '../data/products'
import Header from '../components/Header';

const ProductDetail = ({ navigation }) => {

    console.log(products[0]);

    const initialProd = products[0];

  return (
    <SafeAreaView>
      <Header title = "Detalle"/>
      <Pressable onPress={() => navigation.goBack() }>
        <Text>atrás</Text>
      </Pressable>
      <View style = {styles.containerImage}>
      <Image 
      style = {styles.image}
      source={{
        uri: initialProd.images[2],
      }}
      />
        <Text style={styles.title}> Producto: {initialProd.title} </Text>
        <Text style={styles.description}>  Descripción: {initialProd.description} </Text>
        {/* <AntDesign name="star" size={21} color="black" /> */}
        <Text> Rating: {initialProd.rating} </Text>
        <Text> Precio: ${initialProd.price} </Text>
      </View>
      <Button
        title = "Comprar"
        onPress={() => console.log("funciona")}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    image: {
        height: 350,
        width: 350,
    },

    containerImage: {
        alignItems: "center",
    },

    title: {
        fontSize: 25,
        fontFamily: "Montserrat"
    },

    description: {
        fontSize: 20,
        marginVertical: 15,
    }

})

export default ProductDetail