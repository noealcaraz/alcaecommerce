import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products';

import { useFonts } from "expo-font";
import ProductDetail from './src/screens/ProductDetail';
import RootNavigation from './src/navigation/RootNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/MontserratAlternates-BlackItalic.ttf"),
    Cantarell: require('./assets/fonts/Cantarell-Regular.ttf'),
  });

  if (fontsLoaded === false) {
    return;
  }  
  
  return (

      <NavigationContainer>
       <RootNavigation />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
