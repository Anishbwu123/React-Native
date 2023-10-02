import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

const DateTime = () => {
    const[date,setdate]=useState(new Date());
    const[mode,setmode]=useState('')
    const[show,setshow]=useState(false)

    const showMode=(e)=>{
        setmode(e.target.value)
    }

    const callTimePicker=()=>{
        setshow(true)
        setmode("time")
    }

    const callDatePicker=()=>{
        setshow(true)
        setmode("date")
    }

    const handleChange=(e,selectedValue)=>{
        setshow(false)
        setdate(selectedValue)
    }

    const handleDelete=()=>{
        setdate(data)
        setshow(false)
    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>DateTime</Text>
      <Button title='Show Time' onPress={callTimePicker}/>
      <Button title='Show Date' onPress={callDatePicker}/>
      {
        show && (
            <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={handleChange}
            onTouchCancel={handleDelete}
            />
        )}
        <View style={{marginTop:10,padding:10}}>
            <Text style={{fontSize:20}}>Date:-{date.toLocaleDateString()}</Text>
            <Text style={{fontSize:20}}>Time:-{date.toLocaleTimeString()}</Text>
        </View>
    </View>
  )
}

export default DateTime

const styles = StyleSheet.create({})