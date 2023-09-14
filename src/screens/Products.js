import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'


const Products = ({ category }) => {
    console.log(category)

    useEffect(() => {
      
    }, [])
    
  return (
    <View>
        <Header title="Productos" />
        <Search/>
      <FlatList
      data={products}
      keyExtractor={products.id}
      renderItem={({item}) => <ProductItem item={item} />}
      />
    
    </View>
  )
}

export default Products