import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Products category="laptops"/>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
