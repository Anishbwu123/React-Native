import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import {getAuth,createUserwithEmailandPassword,signinWithEmailandPassword} from 'firebase/auth'

const SignUpLogin = () => {
    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')

    const handleSignup=()=>{
        const auth=getAuth();
        createUserwithEmailandPassword(auth,email,pass)
        .then((userCredential)=>{
            const user=userCredential.user;
            Alert.alert("Done")
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    const handleLogin=()=>{
        const auth=getAuth();
        signinWithEmailandPassword(auth,email,pass)
        .then((userCredential)=>{
            const user=userCredential.user;
            Alert.alert("Done")
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextInput placeholder='Enter your Email' style={styles.inputText} value={email} onChangeText={e=>setemail(e)}/>
      <TextInput placeholder='Enter your Password' style={styles.inputText} value={pass} onChangeText={e=>setpass(e)} secureTextEntry/>
      <TouchableOpacity style={styles.Button} onPress={handleSignup}>
        <Text style={{textAlign:'center',color:'#fff'}}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={handleLogin}>
        <Text style={{textAlign:'center',color:'#fff'}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUpLogin

const styles = StyleSheet.create({
    inputText:{
        padding:10,
        width:'95%',
        borderWidth:1,
        marginTop:5,
    },
    Button:{
        backgroundColor:'green',
        padding:10,
        width:'80%',
        marginTop:10,
    }
})