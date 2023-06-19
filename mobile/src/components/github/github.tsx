import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { width } from '../../utils/dimensions'
import * as Linking from 'expo-linking'

const Github = () => {
  return (
    <TouchableOpacity onPress={handleButtonPress}>
      <AntDesign
        name='github'
        size={width * 0.12}
        color='black'
      />
    </TouchableOpacity>
  )
}

const handleButtonPress = async () => {
    const url: string = 'https://github.com/fatihdinler'
    const supported: boolean = await Linking.canOpenURL(url)
    if(supported) {
        await Linking.openURL(url)
    }
    else {
        Alert.alert(`Cannot open the address!`)
    }
}

export default Github

const styles = StyleSheet.create({})
