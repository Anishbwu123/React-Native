import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native'
import {Feather} from '@expo/vector-icons'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
// import {GoogleOutlined} from '@ant-design/icons'

export default function First() {
    const[email,setemail]=useState('');
    const[pass,setpass]=useState(' ');
    const[passwordvisible,setpasswordvisible]=useState(false);
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='auto'/>
        <ScrollView
        contentContainerStyle={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}
        >
            <View style={styles.content}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.icon}>
                        <Feather name="mail" size={22} color='#7C808D'/>
                    </View>
                    <TextInput style={styles.input} placeholder='Enter Email ID:'
                     selectionColor='#3662AA'
                     onChangeText={setemail}
                     value={email}
                     placeholderTextColor='#7C808D'/>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.icon}>
                        <Feather name="lock" size={22} color='#7C808D'/>
                    </View>
                    <TextInput style={styles.input} placeholder='Password:'
                     selectionColor='#3662AA'
                     secureTextEntry={!passwordvisible}
                     onChangeText={setpass}
                     value={pass}
                     placeholderTextColor='#7C808D'/>

                     <TouchableOpacity style={styles.passwordvisibleButton}>
                        <Feather name={passwordvisible?'eye':'eye-off'} size={20} color="#7C808D"/>
                     </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.forgotpass} onPress={()=>setpasswordvisible(!passwordvisible)}>
                    <Text style={styles.forgotpasstext}>Forgot Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginbutton}>
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={styles.OrContainer}>
                    <View style={styles.OrLine} />
                    <Text style={styles.OrText}>OR</Text>
                    <View style={styles.OrLine}/>     
                </View>
                <TouchableOpacity style={styles.googlebutton}>
                {/* <GoogleOutlined/> */}
                    <Image style={styles.logo} source={require("./Images/googly.png")}/>
                    <Text style={styles.googleText}>Login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.RegisterButton}>
                    <Text style={styles.RegisterText}>Not have an account yet? <Text style={styles.RegisterHighlight}>Register Now!</Text></Text>
                </TouchableOpacity>
            </View>
            </ScrollView>

    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    content:{
        paddingHorizontal:30,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:40
    },
    inputContainer:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:"center",
        marginBottom:20,
        position:'relative',
    },
    icon:{
        marginRight:15,

    },
    input:{
        borderBottomWidth:1.5,
        flex:1,
        paddingBottom:10,
        borderBottomColor:'#eee',
        fontSize:16,
    },
    passwordvisibleButton:{
        position:'absolute',
        right:0,
    },
    forgotpass:{
        alignSelf:'flex-end',
    },
    forgotpasstext:{
        color:'#3662AA',
        fontSize:16,
        fontWeight:'500',
    },
    loginbutton:{
        backgroundColor:'#3662AA',
        padding:14,
        borderRadius:10,
        marginTop:20,

    },
    loginText:{
        color:"#fff",
        textAlign:'center',
        fontWeight:"bold",
        fontSize:16,
    },
    OrContainer:{
        flexDirection:'row',
        alignItems:"center",
        marginTop:20,
        marginBottom:20,
    },
    OrLine:{
        height:1,
        backgroundColor:"#eee",
        flex:1,
    },
    OrText:{
        color:"#7C808D",
        marginRight:10,
        marginLeft:10,
        fontSize:14,
    },
    googlebutton:{
        backgroundColor:"#F2F6F2",
        padding:14,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
        position:'relative',
    },
    googleText:{
        color:"#4e5867",
        fontSize:16,
        fontWeight:"500",
        textAlign:'center',
    },
    logo:{
        width:20.03,
        height:20.44,
        position:'absolute',
        left:14,
    },
    RegisterButton:{
        alignSelf:'center',
        marginTop:40,
    },
    RegisterText:{
        fontSize:16,
        color:"#7C808D",
    },
    RegisterHighlight:{
        fontSize:16,
        color:'#3662AA',
        fontWeight:'500'
    }
    
})