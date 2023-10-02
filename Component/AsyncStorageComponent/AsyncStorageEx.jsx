import { StyleSheet, Text, View,Button,Alert } from 'react-native'
import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput } from 'react-native-gesture-handler'

const AsyncStorageEx = () => {
    const[date,setdata]=useState('')
    const[storedata,setstoredata]=useState('')

    const handleSubmit=async()=>{
        try{
            await AsyncStorage.setItem("anish",data);
            setstoredata(data);
        }
        catch(err){
            setstoredata(err.message)
        }
    }

    const handleFetchData=()=>{
        try{
            const getData= AsyncStorage.getItem('anish');
            Alert.alert(getData)   
        }
        catch(err){
            setstoredata(err.message)
        }
        const handleDelete=()=>{
            try{
                    const remove= AsyncStorage.removeItem('anish')
                    
            }
            catch{
                setstoredata(err.message)
            }
        }
  return (
    <View>
      <Text>AsyncStorageEx</Text>
      <TextInput
      style={{padding:10,borderWidth:1,width:'90%',marginLeft:10}}
      placeholder='Enter data'
      onChangeText={(e)=>setdata(e)}
      value={data}
      />
      <Button title='submit' onPress={handleSubmit}/>
      <Text>{storedata}</Text>
      <Button title='Fetch data on Storage' onPress={handleFetchData}/>
      <Text>Delete All data</Text>
      <Button title='Delete data' onPress={handleDelete}/>
    </View>
    
  )
}
}
    

export default AsyncStorageEx
