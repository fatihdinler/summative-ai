import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/header/header'
import Hero from '../../components/hero/hero'
import Demo from '../../components/demo/demo'
import { width } from '../../utils/dimensions'

const Layout: React.FC = ({}) => {
  interface Props {}

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.hero}>
          <Hero />
        </View>
        <View>
          <Demo />
        </View>
      </View>
    </ScrollView>
  )
}

export default Layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: width * 0.05,
  },
  hero: {
    flex: 1,
    padding: 15,
    alignSelf: 'center',
    marginTop: 25,
  },
})
