import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const AboutScreen = () => {
    const nav=useNavigation();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Button title='Home screen' onPress={()=>nav.navigate("Home")}/>
      <Text>AboutScreen</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({})