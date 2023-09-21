import { SafeAreaView, Text, FlatList, StyleSheet, View  } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { categorias } from '../data/categorias'
import CategoryItem from '../components/CategoryItem'
import { colors } from '../theme/colors'


const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="Productos" navigation={navigation} />
      <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={key => key}
        renderItem={({ item }) => ( 
          <CategoryItem navigation={navigation} item={item}/>
        )}
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.heavyColor,
      
  }
})

export default Home