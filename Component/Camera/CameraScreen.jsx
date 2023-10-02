import { StyleSheet, Text, View,Button,  TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import{Camera,CameraType} from 'expo-camera'


//if you want to see result first off the access of the expo-app permission then try allowaccess

const CameraScreen = () => {
    const[permission,setpermission]=Camera.useCameraPermissions();
    const[ispermitted,setispermitted]=useState('')
    const[type,setype]=useState(CameraType.back);

    if(!permission){
        return <View/>;
    }
    if(!permission.granted){
        return(
            <View>
                <Text>Request Camera Permisssion</Text>
                <Button title='allow access' onPress={setpermission}/>
            </View>
        )
    }

    const Flip=()=>{
        setype((e)=>(e===CameraType.back?CameraType.front:CameraType.back))
    }
  return (
    <View>
      <Text>CameraScreen</Text>
      <Camera style={{height:200,width:200}} type={type}/>
      <TouchableOpacity style={styles.Button}>
      <Button title='flip' onPress={Flip}/>
      </TouchableOpacity>
      {/* <Button title='take a snap' onPress={Click}/> */}
    </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
  Button:{
    backgroundColor:'#F194FF',
    borderRadius:20,
    padding:10,
    elevation:2
  }
})