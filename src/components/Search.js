import { View, Text, StyleSheet, TextInput, Pressable  } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';

const Search = () => {
    const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput 
      
        style={styles.input}
      placeholder= "Buscar producto"
      value={text}
      />
      <Pressable onPress={() => console.log("boton presionado")}>
      <AntDesign name="close" size={33} color="black" />
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        
    },

    input: {
        width: "78%",
        borderWidth: 1,
        borderRadius: 8, 
        padding: 10,
        fontSize: 20,
        marginRight: 15,

    },
});

export default Search
