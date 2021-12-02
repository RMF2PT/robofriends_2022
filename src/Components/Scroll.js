import React from 'react'


const Scroll = (props) => {
  return (
    <div className='overflow-y-auto border-gray-900 border-t-2 flex flex-grow place-items-start justify-center w-full'>
      {props.children}
    </div>
  );
};

export default Scroll;