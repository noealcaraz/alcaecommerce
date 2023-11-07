import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { setCategory } from '../redux/slice/homeSlice';
import { useDispatch } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const categoryImages = {
  "Perros": <FontAwesome5 name="dog" size={70} color="#6568A8" />,
  "Gatos": <FontAwesome5 name="cat" size={70} color="#6568A8" />,
  "Otras": <Entypo name="baidu" size={70} color="#6568A8" />,
};

const CategoryItem = ({ item, navigation }) => {
  
  const dispatch = useDispatch();

  const onHandleItem = () => {
    dispatch(setCategory(item));
    navigation.navigate("products", { item: item });
  };

  return (
    <Pressable onPress={() => onHandleItem()} style={styles.categoryButton}>
      <View style={styles.iconContainer}>{categoryImages[item]}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  categoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
    borderColor: colors.mediumColor,
    borderWidth: 7,
    borderRadius: 100,
    height: 150, 
    width: "75%", 
  },
})
export default CategoryItem; 