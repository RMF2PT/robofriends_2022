import React from 'react'

const Card = ({ id, name, email }) => {
  return (
    <div className='inline-block p-3 m-2 bg-green-400 text-center rounded-xl shadow-xl transform transition duration-500 hover:scale-105'>
      <img className='h-40 w-40' alt='robot' src={`https://robohash.org/${id}`} />
      <div>
        <h2 className='text-md font-bold text-gray-900'>{name}</h2>
        <p className='text-xs font-light text-gray-900'>{email}</p>
      </div>
    </div>
  )
}

export default Card;