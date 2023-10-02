import {  Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MenuScreen from './MenuScreen'
import ProfileScreen from './ProfileScreen'
import HelpScreen from './HelpScreen'
import { AntDesign,MaterialCommunityIcons,FontAwesome5   } from '@expo/vector-icons';

const Top=createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Top.Navigator screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{backgroundColor:'#527cf7'}
    }}>
        <Top.Screen name='Menu' component={MenuScreen} 
        options={{
            tabBarIcon:()=>(<AntDesign name="menufold" size={24} color="black" />)
        }}
        />
        <Top.Screen name='Profile' component={ProfileScreen}
        options={{
            tabBarIcon:()=>(<MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />)
        }}
        />
        <Top.Screen name='Help' component={HelpScreen}
        options={{
            tabBarIcon:()=>(<FontAwesome5 name="hands-helping" size={24} color="black" />)
        }}
        />
    </Top.Navigator>
  )
}

export default TopTabNavigation

