import { View, Text, StyleSheet, TextInput, Pressable  } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';

const Search = ({ text, setText }) => {
    
  const clearText = () => {
    setText(null);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        onChangeText={(value) => setText(value)}
        style={styles.input}
      placeholder= "Buscar producto"
      value={text}
      />
      <Pressable onPress={() => clearText()}>
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
        backgroundColor: colors.lightColor,
    },
});

export default Search
