import { View, Text, Modal,TouchableOpacity,StyleSheet } from 'react-native'
import React,{useState} from 'react'

const ModalCore = () => {
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
                        <Text>
                            Lorem ipsum dolor sit amet,
                             consectetur adipisicing elit.
                              Quas suscipit assumenda 
                              modi hic sit accusamus sed 
                              ea sequi magni, ut doloremque alias libero 
                              repellat quibusdam voluptates 
                              fugit dolorem dignissimos vero.
                               Dolores quia, asperiores debitis
                                temporibus nihil porro alias,
                                 cumque rerum fugiat, nam ut
                                  distinctio.
                                   Vel quo possimus             
                            quia aspernatur?
                            Lorem ipsum dolor sit
                        </Text>
                <TouchableOpacity style={styles.button} onPress={()=>setmodalvisible(!modalvisible)}>
                    <Text style={styles.CloseButton}>Close</Text>
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
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'#F194FF',
        borderRadius:20,
        padding:10,
        elevation:2
    },
    textStyle:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    },
    CloseButton:{
        color:'white',
       
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
        elevation:2
    },
)


export default ModalCore