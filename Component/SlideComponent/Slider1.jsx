import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Slider from '@react-native-community/slider'

const Slider1 = () => {
    const[value,setvalue]=useState(0)
  return (
    <View style={{
        marginTop:30,
        borderWidth:1,
        backgroundColor:"grey",
        marginLeft:10,
        marginRight:10,
        padding:10,
        borderRadius:20
    }}>
     <Text>Slider Majestic</Text>
     <Slider
     maximumValue={5000}
     minimumValue={0}
     step={50}
     value={value}
     onValueChange={(e)=>setvalue(e)}
     minimumTrackintColor="red"
     maximumTrackintColor="green"
    />

     <Text style={{textAlign:'center',fontSize:'30'}}>{value}</Text>
    </View>
  )
}

export default Slider1

const styles = StyleSheet.create({})