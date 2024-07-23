import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Button = ({handleClick, innerText, className}) => {
  return (
    <div className='text-white '>
        <button onClick={handleClick} className='relative bg-blue-900 py-2 px-4 rounded-full font-bold group/item'>
        <p className='border-white border-b'>{innerText}</p>
        {className}
        <FaAngleRight className='absolute right-0 top-1/2 transform -translate-y-2 opacity-5 group-hover/item:opacity-100 duration-300 ease-in-out'/>
        </button>
        
    </div>
  )
}

export default Button