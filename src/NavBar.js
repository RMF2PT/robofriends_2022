import React from 'react'
import SearchBox from './SearchBox'

const NavBar = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1>Robofriends</h1>
      <SearchBox />
    </div>
  )
}

export default NavBar