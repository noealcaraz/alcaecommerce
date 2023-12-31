import { FlatList, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import ProductItem from '../components/ProductItem'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux'

import { useGetProductsQuery } from "../services/ecApi";

const Products = ({ route, navigation }) => {
    const [categoryProd, setCategoryProd] = useState([]);
    const [text, setText] = useState(null);
    const { item } = route.params;
  
  const products = useSelector((state) => state.homeSlice.allProducts);

  const { data, isLoading, isError } = useGetProductsQuery();

  //console.log("productos cargados:", data);
  

  const productsFilterByCategory = useSelector(
    (state) => state.homeSlice.productsFilterByCategory
  );

    
    useEffect(() => {
      
      setCategoryProd(productsFilterByCategory); 
      
      if (text) {
        const titleProduct = products.filter(
          (el) => el.title.toLowerCase().includes(text.toLowerCase())
        );
        //console.log("productos filtrados:", titleProduct);
        setCategoryProd(titleProduct);
      }
    }, [text, item]); 

   
    
  return (
    <SafeAreaView>
        <Header title= {item} navigation={navigation} />

        <Search text={text} setText={setText}/>
        
        <FlatList
          data={categoryProd}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <ProductItem navigation={navigation} item={item} />
          )}
        />
    </SafeAreaView>
  );
};

export default Products;