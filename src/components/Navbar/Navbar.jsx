//the component is a container created for our other files

import React from 'react'

// const newStyle =  ()=>{
//   backgroundColor: "blue",
//   borderRadius: "15px",
//   padding: "10px"
// }

const Navbar = () => {
  return (
    <div>
      <h1 className='text-yellow-500'>navbar</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>

      <button style={
        {
          backgroundColor: "blue",
          borderRadius: "15px",
          padding: "10px"
        }
      }>
        Sign Up
      </button>
    </div>
  )
}

export default Navbar