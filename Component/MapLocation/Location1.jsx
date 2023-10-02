import { View,Text,TouchableOpacity, Alert } from "react-native";
import React,{useEffect,useRef,useState} from "react";
import MapView,{Marker,PROVIDER_GOOGLE} from "react-native-maps";
import {MaterialIcons} from '@expo/vector-icons'
import * as Location from 'expo-location'



const Location1=()=>{
    const mapRef=useRef(null);
    const [mapRegion,setMapRegion]=useState({
        latitude:22.5726,
        longitude:88.3639,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421,
    });

useEffect(()=>{
    (async()=>{
        const {status}=await Location.requestForegroundPermissionsAsync();
        if(status !=='granted'){
            Alert.alert('permission to access location was denied');
            return;
        }
        // let location =await Location.getCurrentPositionAsync({});
        // setMapRegion({
        //     longitude:location.coords.longitude,
        //     latitude:location.coords.latitude,
        //     latitudeDelta:0.0922,
        //     longitudeDelta:0.0421
        // })
    })();
},[]);

const handleMyLocation=async()=>{
    
    let {status}=await Location.requestForegroundPermissionsAsync();
    if(status !=='granted'){
        Alert.alert('permission to access location was denied')
return;

    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});
    setMapRegion({
        longitude: location.coords.longitude,
        latitude : location.coords.latitude,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421,

    }); 
};

return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <MapView
    ref={mapRef}
    region={mapRegion}
    provider={PROVIDER_GOOGLE}
    showsUserLocation={true}
    showsMyLocationButton={false}

    style={{width:'100%',height:'100%'}}>
        <Marker coordinate={mapRegion}/>
    </MapView> 
<TouchableOpacity onPress={handleMyLocation} style={{position:'absolute',bottom:20,right:10,borderRadius:10}}>
    <MaterialIcons name="my-location" size={30} color='black'/>
</TouchableOpacity>
    </View>
)





}

export default Location1;