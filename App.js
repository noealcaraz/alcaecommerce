import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import { useFonts } from "expo-font";

import TabNav from './src/navigation/TabNav';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/MontserratAlternates-BlackItalic.ttf"),
    Cantarell: require('./assets/fonts/Cantarell-Regular.ttf'),
  });

  if (fontsLoaded === false) {
    return;
  }  
  
  return (
    <Provider store={store}>
      <NavigationContainer>
       <TabNav />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
 
});
