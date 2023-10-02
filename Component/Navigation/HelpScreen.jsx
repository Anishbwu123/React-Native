import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HelpScreen = () => {
    const nav = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title='Click' onPress={() => nav.navigate("Menu")} />
            <Text>Redirect to MenuScreen</Text>
        </View>
    )
}

export default HelpScreen

const styles = StyleSheet.create({})