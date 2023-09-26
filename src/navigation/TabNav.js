import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile';
import RootNavigation from './RootNavigation';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{title: "", headerShown: false}}>
        <Tab.Screen 
        options={{ tabBarIcon: ( {focused} ) => <Entypo name="home" size={24} color= { focused ? colors.mediumColor : "black"} />}}
        name = "rootNavigation" component={RootNavigation} />
        <Tab.Screen 
        options={{ tabBarIcon: ( {focused} ) => <Ionicons name="person-outline" size={24} color= { focused ? colors.mediumColor : "black"} />}}
        name = "profile" component={Profile} />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default TabNav

