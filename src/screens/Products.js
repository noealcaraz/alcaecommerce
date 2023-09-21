import { View, Text, FlatList, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'



const Products = ({ category, route, navigation}) => {
    const [categoryProd, setCategoryProd] = useState([]);
    const [text, setText] = useState(null);

    const { item } = route.params;

    console.log(item)
    
    useEffect(() => {
      const categoryProducts = products.filter((el) => el.category === item);
      setCategoryProd(categoryProducts); 
      
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
          <Text>atrás</Text>
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

export default Products