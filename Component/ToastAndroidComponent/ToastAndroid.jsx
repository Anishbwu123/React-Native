import { StyleSheet, Text, View,ToastAndroid,TouchableOpacity } from 'react-native'
import React from 'react'

const ToastAndroid1 = () => {
    const handlePress=()=>{
        ToastAndroid.show(
            'Welcome Anish',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,50
        )
    }
  return (
    <View>
     <TouchableOpacity onPress={handlePress} style={{backgroundColor:'pink',padding:"10"}}>
        <Text style={{textAlign:'center'}}>
            Show Notification
        </Text>

     </TouchableOpacity>
    </View>
  )
}

export default ToastAndroid1

const styles = StyleSheet.create({})