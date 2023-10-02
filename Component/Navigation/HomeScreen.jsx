import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const nav=useNavigation();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Button title='Click' onPress={()=>nav.navigate("About")}/>
      <Text>Redirect to AboutScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})