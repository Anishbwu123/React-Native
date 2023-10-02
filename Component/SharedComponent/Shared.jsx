import {  Text, View,Share,Alert,Button } from 'react-native'
import React from 'react'

const Shared = () => {
    const url="https://ejobindia.com/react-native-training.php";

    const onShare=async()=>{
        try{
            const result=await Share.share({
                message:("React native course structure",+"\n"+ url),
            });
            if(result.action===Share.sharedAction){
                if(result.activityType){
                    console.log("share with activity type",result.activityType);
                }
                else{
                    console.log("share ");
                }
        }
        else if(result.action===Share.dismissedAction){
            console.log("Dismissed");
        }
    }catch(error){
        Alert.alert(error.message)
    }
}
  return (
    <View style={{marginTop:40}}>
      <Text>Shared</Text>
      <Button title='share' onPress={onShare}/>
    </View>
  )
}

export default Shared;

