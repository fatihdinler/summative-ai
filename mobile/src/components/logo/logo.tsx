import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { width } from '../../utils/dimensions'

const Logo = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name='settings'
        size={width * 0.12}
        color='orange'
      />
      <Text style={styles.text}>Sumz</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: width * 0.07,
        fontWeight: 'bold',
        marginLeft: 5,
    },
})
