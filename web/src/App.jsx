import React from 'react'
import Demo from './components/demo/demo'
import Hero from './components/hero/hero'
import './App.css'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>
      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App