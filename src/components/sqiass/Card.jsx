import React from 'react'


// USE OF PROPS

const Card = ({image,imgtwo, title, smtitle, small, text, learn}) => {
  
  return (
    <div className='CardDiv w-full md:w-[30%] mt-10'>
            <div>
                <img className='filter grayscale' src={image} alt="" />
            </div>
            <div>
                <img src={imgtwo} alt="" />
            </div>
                <h3>{title}</h3>
                <p className='font-bold'>{smtitle}</p>
                <small>{small}</small>
                <p>{text}</p>
                <span className='my-2 p-2 border-b-2 transition ease-in-out delay-150
                     hover:-translate-y-5  hover:border-black'>{learn}</span>
    </div>
  )
}

export default Card