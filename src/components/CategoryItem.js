import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CategoryItem = ({item}) => {
  return (
    <View>
      <Text style={styles.categoryText}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 20,
        margin: 5,
        color: colors.mediumColor,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",

        borderColor: colors.lightColor,
        borderWidth: 1,
        borderRadius: 15,
        textAlign: "center",
        padding: 8,
    }
})
export default CategoryItem