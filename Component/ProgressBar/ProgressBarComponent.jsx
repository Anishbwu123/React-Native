import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as ProgressBar from 'react-native-progress'

const ProgressBarComponent = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>ProgressBarComponent</Text>
      <ProgressBar.Bar progress={0.5} width={200} indeterminate={true}/>
      <ProgressBar.Pie progress={0.4} size={80} width={200} indeterminate={true} borderWidth={4} color='red'/>
      <ProgressBar.Circle progress={0.5} width={200} indeterminate={true} borderWidth={4} color='green'/>
      <ProgressBar.CircleSnail progress={0.9} width={200} indeterminate={true} color='blue'/>
    </View>
  )
}

export default ProgressBarComponent

const styles = StyleSheet.create({})