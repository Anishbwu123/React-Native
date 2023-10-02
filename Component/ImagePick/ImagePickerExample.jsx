import { StyleSheet, Text, View,Button,Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'



const ImagePickerExample = () => {
    const[img,setimg]=useState('')
    const pickerImage=async()=>{
        const result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        });
        if(!result.canceled){
            setimg(result.assets[0].uri);
        }
    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
      <Text>ImagePickerExample</Text>
      <Button title='pick your photo' onPress={pickerImage}/>
      {img && <Image source={{uri:img}} style={{height:200,width:200,marginTop:20}}/>}
    </View>
  )
}

export default ImagePickerExample

const styles = StyleSheet.create({})