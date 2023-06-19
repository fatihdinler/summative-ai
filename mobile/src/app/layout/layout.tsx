import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/header/header'
import Hero from '../../components/hero/hero'
import Demo from '../../components/demo/demo'

const Layout: React.FC = ({}) => {
  interface Props {}

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Hero />
        <Demo />
      </View>
    </ScrollView>
  )
}

export default Layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
})
