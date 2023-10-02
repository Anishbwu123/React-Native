import { StyleSheet, Text, View,Platform } from 'react-native'
import React from 'react'

const Platform1 = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View>
        <Text>Platform Check</Text>
      </View>
      <Text style={{fontWeight:'bold'}}>
        OS:-{Platform.OS}
      </Text>
      <Text>
        {Platform.Version}
      </Text>
    </View>
  )
}

export default Platform1

const styles = StyleSheet.create({})