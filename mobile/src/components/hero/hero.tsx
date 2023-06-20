import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width } from '../../utils/dimensions'

const Hero = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.primaryText}>Summarize Articles with</Text>
      <View style={styles.secondaryTextContainer}>
      <Text style={styles.secondaryText}>OpenAI</Text>
      <Text style={styles.coloredText}> GPT-4</Text>
      </View>
    </View>
  )
}

export default Hero

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  primaryText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
  },
  secondaryTextContainer: {
    flexDirection: 'row',
  },
  secondaryText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
  },
  coloredText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: 'orange'
  },
})
