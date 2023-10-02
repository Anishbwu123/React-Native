import { StyleSheet, Text, View,Switch,Image } from 'react-native'
import React,{useState} from 'react'
import bulbon from '../Images/bulbon.jpg'

const SwitchComponent = () => {
    const[img,setimg]=useState(false)
    const[isEnabled]=useState(false)
  return (
    <View style={{flex:1,marginTop:30,backgroundColor:'red'}}>
        <Text>Toggle switch</Text>
        <Switch
        trackColor={{false:'#929292',true:'#81b0ff'}}
        thumbColor={isEnabled? '#f5dd4d': '#f4f3f4'}
        value={img}
        onValueChange={(e)=>setimg(e)}
         />
      <View style={{marginLeft:'40'}}>
        {img?(
            <Image source={bulbon.jpg} style={{height:'500',width:'300'}}/>
        ):(
            <Image  source={require('../Images/bubloff.jpg')}style={{height:"60%",width:"70%"}}/>
        )}
      </View>
    </View>
  )
}

export default SwitchComponent

const styles = StyleSheet.create({})