import { View, Text, StyleSheet, TextInput, Pressable  } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';

const Search = ({ text, setText }) => {
    
  const clearText = () => {
    console.log("textoo", value)
    setText(null);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        onChangeText={(value) => setText(value)}
        style={styles.inpot}
        placeholder= "Buscar alimento"
        value={text}
      />
      <Pressable onPress={() => clearText()}>
        <AntDesign name="close" size={33} color="#6568A8" />
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

    inpot: {
        width: "78%",
        borderWidth: 1,
        borderRadius: 8, 
        borderColor: colors.mediumColor,
        padding: 10,
        fontSize: 20,
        marginRight: 15,
        backgroundColor: colors.white,
    },
});

export default Search;
