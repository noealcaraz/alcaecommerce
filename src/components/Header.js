import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.headerTitle}> {title} </Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.lightColor
        
    },

    headerTitle: {
        fontWeight: "600",
        fontSize: 25,
        color: colors.heavyColor,
        
    }
})


export default Header