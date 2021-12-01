import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <div className='bg-gray-100 w-full h-screen'>
      {robots.map(user => {
        return (
          <Card 
            key={user.id} 
            id={user.id} 
            name={user.name} 
            email={user.email}
          />
        );
      })}
    </div>
  );
}

export default CardList