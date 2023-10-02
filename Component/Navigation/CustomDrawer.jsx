import { ImageBackground, StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';


const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1,backgroundColor:'#141414' }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: 'black' }}>
        <Image source={require('../Images/marsh.jpg')} style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10, marginLeft: 100 }} />
        <Text style={{ color: '#fff', fontSize: 15, marginLeft: 100, marginBottom: 15, fontWeight: 'bold' }}>Anish Dhar</Text>
        <View style={{ flex: 1, backgroundColor: 'black', paddingTop: 10 }}>
          <DrawerItemList {...props}/>
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="settings" size={24} color="violet" />
            <Text style={{ fontSize: 15, marginLeft: 5, fontWeight:'bold',color:'#fff'}}>Settings</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>


  )
}

export default CustomDrawer

const styles = StyleSheet.create({})