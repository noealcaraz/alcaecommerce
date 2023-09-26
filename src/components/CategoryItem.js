import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { setCategory } from '../redux/slice/homeSlice';
import { useDispatch } from 'react-redux';

const CategoryItem = ({ item, navigation }) => {
  // item es la categoria presionada

  const dispatch = useDispatch();

  const onHandleItem = () =>{
    dispatch(setCategory(item));
    navigation.navigate("products", { item : item });
  };


  return (
    <Pressable onPress={() => onHandleItem()} style={styles.categoryButton}>
      <Text style={styles.categoryText}>{item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 20,
        margin: 5,
        color: colors.mediumColor,
        alignItems: "center",
        justifyContent: "center",
        

        borderColor: colors.lightColor,
        borderWidth: 1,
        borderRadius: 15,
        textAlign: "center",
        padding: 10,
    },

    categoryButton: {
      width: "50%",
      marginLeft: 110,
    }
})
export default CategoryItem