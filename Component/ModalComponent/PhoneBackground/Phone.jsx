import { View, Text,ScrollView,ImageBackground,StyleSheet,Image } from 'react-native'
import React from 'react'
const IMG={
  uri:"https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
const Phone = () => {
  return (
   
      // <View>
      //   <Image source={require("../../Images/phone.jpg")} style={{height:300,width:300}}/>
      // </View>
      <ImageBackground source={IMG} style={{flex:1,width:'100%'}}>
        {/* <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Anish Dhar React-Native</Text> */}
      </ImageBackground>
  )
}

const styles=StyleSheet.create({
    // imgStyle:{
    //     height:300
    // }
})

export default Phone