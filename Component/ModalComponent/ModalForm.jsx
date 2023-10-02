import { View, Text, Modal,TouchableOpacity,StyleSheet,TextInput  } from 'react-native'
import React,{useState} from 'react'

const ModalForm = () => {
    const[modalvisible,setmodalvisible]=useState(false);
  return (
    <View style={styles.container}>
        
    <View style={styles.container}>
        <Modal
        animationType='slide'
        transparent={true}
        visible= {modalvisible}
        onRequestClose={()=>{setmodalvisible(!modalvisible)}}
        >
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    
                <View style={styles.CloseButton}>
                        <Text style={styles.Header}>Login Form</Text>  
                       
                     <TouchableOpacity style={styles.button} onPress={()=>setmodalvisible(!modalvisible)}>
                       
                            <Text >Close</Text>
                        </TouchableOpacity>
                 </View>
                  <TextInput placeholder='Enter your name' placeholderTextColor='grey' style={styles.inputView}
                   keyboardType='text'/> 
                   <TextInput placeholder='Enter your password' placeholderTextColor='grey' style={styles.inputView}
                   keyboardType='password'/> 
                    <TouchableOpacity style={styles.loginbutton}>
                    <Text style={styles.loginText}>
                        Submit
                    </Text>
                </TouchableOpacity>
          
                </View>
            </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={()=>setmodalvisible(true)}>
            <Text style={styles.textStyle}>Open modal</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

const styles=StyleSheet.create({
    inputView:{
        borderWidth:1,
        borderColor:'black',
        padding:10,
        width:'200%',   
        marginTop:30,
        alignItems:'center',
        borderRadius:20,
        height:50
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'#F194FF',
        borderRadius:20,
        padding:10,
        elevation:2,
        marginTop:20,   
    },
    textStyle:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    },
    modalContainer:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        padding:35,
        alignItems:'center',
        shadowColor: "green",
        shadowOffset: { 
            width : 0 , height:2},
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:2,

        Header:{
            color:'red',
            fontSize:16,
            fontWeight:"bold",
            paddingTop:26
        },
        CloseButton:{
           // flex:1,
           // flexDirection:'row'
            flexDirection: "row" ,
            marginLeft: 20,
            justifyContent: 'space-evenly' 
            
        },
        loginbutton:{
        backgroundColor:'#3662AA',
        padding:20,
        borderRadius:30,
        marginTop:20,
        },
        loginText:{
            color:'white',
            fontWeight:"bold",
            fontSize:15
        }
    },
    
)


export default ModalForm