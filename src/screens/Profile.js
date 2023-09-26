import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Profile = () => {
  return (
    <View>
      <Header title= "Mi perfil" />
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Image 
          style={ styles.imagen }
          source={{
            uri: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
          }}
        
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: 200, 
    height: 200,
    borderRadius: 30,
  },
})

export default Profile;