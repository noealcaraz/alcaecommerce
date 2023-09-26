import { FlatList, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import ProductItem from '../components/ProductItem'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux'

const Products = ({ category, route, navigation}) => {
    const [categoryProd, setCategoryProd] = useState([]);
    const [text, setText] = useState(null);
    const { item } = route.params;
  
  const products = useSelector((state) => state.homeSlice.allProducts);

  const productsFilterByCategory = useSelector((state) => state.homeSlice.productsFilterByCategory);

  console.log(productsFilterByCategory)

  // console.log("productos", JSON.stringify(products, null, " "));

    //console.log(item)
    
    useEffect(() => {
      
      setCategoryProd(productsFilterByCategory); 
      
      if (text) {
        const titleProd = products.filter(
          (el) => el.title.toLowerCase() === text.toLowerCase()
          ); 
  
        setCategoryProd(titleProd);
      }
    }, [text, item]); 

   
    
  return (
    <SafeAreaView>
        <Header title= {item} />
        <Pressable onPress={() => navigation.goBack() }>
          <AntDesign name="caretleft" size={24} color="black" style={styles.atras} />
        </Pressable>
        <Search text={text} setText={setText}/>
        <FlatList
          data={categoryProd}
          keyExtractor={products.id}
          renderItem={({item}) => <ProductItem navigation={navigation} item={item} />}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  atras: {
    marginLeft: "2",
  }
})

export default Products