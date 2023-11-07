import { SafeAreaView, Text, FlatList, StyleSheet, View, ActivityIndicator  } from 'react-native'
import React from 'react'
import Header from '../components/Header'

import CategoryItem from '../components/CategoryItem'
import { colors } from '../theme/colors'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from "../services/ecApi";
import { categorias } from '../data/categorias'

const Home = ({ navigation }) => {

  // const categorias = useSelector((state) => state.homeSlice.allCategories);

  // console.log("CATEGORIES FROM STORE", categorias)
  const {
    data: categorias,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();


  return (
    <SafeAreaView  style={{ marginBottom: 40, flex: 1 }}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          <ActivityIndicator 
          style={{ flex: 1 }}
          size="large"
          color="#6568A8"
          />
        </View>
      ) : (
        <>
          <Header title="Mi mascota" />
          <View style={styles.container}>
            <FlatList
              style={{ marginBottom: 50 }}
              data={categorias}
              keyExtractor={(key) => key}
              onEndReached={() => console.log("Aquí")}
              renderItem={({ item }) => (
                <CategoryItem navigation={navigation} item={item} />
              )}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.white,
      
  }
})

export default Home