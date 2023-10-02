import { StyleSheet, Text, View , RefreshControl, SafeAreaView,ScrollView} from 'react-native'
import React,{useCallback, useEffect, useState} from 'react'

const Refresh = () => {
    const[refresh,setrefresh]=useState(false);
    const onRefresh=useCallback(()=>{
        setrefresh(true)
        setTimeout(()=>{
            setrefresh(false)
        },5000);
    },[])
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
            <RefreshControl  refresh={refresh} onRefresh={onRefresh}/>
        }
        >
            <Text>Pull down to see refresh</Text>
        </ScrollView>
        
    </SafeAreaView>
  )
}

export default Refresh

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    scrollView:{
        flex:1,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'center'
    }
})