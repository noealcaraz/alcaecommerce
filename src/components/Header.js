import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ title, navigation }) => {
  return (
    <SafeAreaView style={styles.container} >
      {navigation && (
      <Pressable 
        onPress={() => navigation.goBack() }>
        <AntDesign name="caretleft" size={34} color="#6568A8" style={styles.back} />
      </Pressable>
      )}
      <Text style={styles.headerTitle}> {title} </Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.heavyColor,
        flexDirection: 'row',
    },

    headerTitle: {
        fontWeight: "800",
        fontSize: 40,
        color: colors.lightColor,
        fontFamily: "Cantarell",
        
    },

    back: {
      marginRight: 250,
    }
})


export default Header;