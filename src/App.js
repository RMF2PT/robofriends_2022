import React from 'react'
import CardList from './CardList'
import NavBar from './NavBar'
import { robots } from './robots'

const App = () => {
  return (
    <div className='bg-gray-100 w-full h-screen'>
      <NavBar />
      <CardList robots={robots} />
    </div>
  )
}

export default App