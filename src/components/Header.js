import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';

const Header = ({ title, navigation }) => {
  return (
    <SafeAreaView style={styles.container} >
      
      <Text style={styles.headerTitle}> {title} </Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.mediumColor
        
    },

    headerTitle: {
        fontWeight: "600",
        fontSize: 25,
        color: colors.heavyColor,
        fontFamily: "Cantarell",
        
    }
})


export default Header