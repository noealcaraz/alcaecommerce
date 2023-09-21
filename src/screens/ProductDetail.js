import { View, Text, Image, StyleSheet, Button, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { products } from '../data/products'
import Header from '../components/Header';
import { AntDesign } from '@expo/vector-icons';

const ProductDetail = ({ navigation }) => {

    console.log(products[0]);

    const initialProd = products[0];

  return (
    <SafeAreaView>
      <Header title = "Detalle"/>
      <Pressable onPress={() => navigation.goBack() }>
        <AntDesign name="caretleft" size={24} color="black" />
      </Pressable>
      <View style = {styles.containerImage}>
      <Image 
      style = {styles.image}
      source={{
        uri: initialProd.images[2],
      }}
      />
        <Text style={styles.title}> {initialProd.title} </Text>
        <Text style={styles.description}> {initialProd.description} </Text>
        <Text style={styles.precio}> Precio: ${initialProd.price} </Text>
      </View>
      <View style={styles.comprar}>
      <Button
        title = "Comprar"
        style={styles.comprarText}
        onPress={() => console.log("funciona")}
      />
      </View>
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
        fontSize: 30,
        fontFamily: "Montserrat"
    },

    description: {
        fontSize: 20,
        marginVertical: 15,
    },

    precio: {
      fontSize: 26,
      padding: 20,
    },

    comprar: {
      width: "50%",
      fontSize: 20,
      marginLeft: 110,
      color: "green",
    },

   

})

export default ProductDetail