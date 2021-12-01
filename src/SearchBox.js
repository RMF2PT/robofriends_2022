import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

const SearchBox = ({ searchChange }) => {
  return (
    <div className="flex items-center rounded-full border-grey-light border">
      <button>
        <span className="flex items-center text-grey p-2">
          <SearchIcon className="h-5 w-5 text-green-400"/>
        </span>
      </button>
      <input 
        className="w-auto rounded mr-4 bg-gray-100 focus:outline-none" 
        type="text" 
        placeholder="Search..."
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox