import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../logo/logo'
import Github from '../github/github'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
      <Logo  />
      </View>
      <View style={styles.github}>
      <Github />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    marginLeft: 15
  },
  github: {
    marginRight: 15,
  },
})