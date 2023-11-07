import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { useWindowDimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { setProductSelected } from '../redux/slice/homeSlice';

const ProductItem = ({ item, navigation }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  const onHandleProductDetail = () => {
    dispatch(setProductSelected(item));
    navigation.navigate("productDetail");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onHandleProductDetail()} style={styles.touchable}>
        <Text style={width < 300 ? styles.textMin : styles.text}> 
          {item.title} 
        </Text>
      </Pressable>  
      <Image 
        source={{uri: item.images[0] }}
        height={80}
        width={80}
        style={styles.image}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.mediumColor,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    touchable: {
      flex: 1,
    },

    text: {
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 20,

    },

    textMin: {
      fontSize: 10,
      fontWeight: "900",
    },

    image: {
      height: 100,
      width: 100,
      marginLeft: 10,
      borderRadius: 10,
    },
})

export default ProductItem; 