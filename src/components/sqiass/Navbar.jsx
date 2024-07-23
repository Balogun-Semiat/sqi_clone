import React, {useState} from 'react';
import sqiLogo from '../../img/sqi.jpg'
import { FaBars, FaAngleDown} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import SecNavbar from './SecNavbar';


const SqiNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick =()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* <SecNavbar /> */}
        <div className='w-full sticky top-0 z-50'>
            <nav className='md:px-20 px-10 md:py-2 md:flex justify-between align-items-center text-center shadow-md bg-light '>

            <div className='flex justify-between items-center md:w-1/2'>
            <div className='w-20'>
                <img className='w-16 md:w-20' src={sqiLogo} alt="" /> 
            </div>

            <div className={`md:hidden`}>
                <button onClick={handleClick} className='bg-blue-900 rounded-full p-1'> 
                   {isOpen ? <FaTimes className='text-white text-2xl font-bold'/> : <FaBars className='text-white text-xl font-bold' /> }  </button>
            </div>
            </div>

            <div className={`md:w-1/2 md:justify-between md:text-blue-900 text-red-200 md:flex w-100 bg-blue-900 md:bg-transparent leading-10 text-center px-2 ${isOpen ? "block" : "hidden"}`}>
                <span className='font-bold cursor-pointer flex items-center gap-2'>
                About
                <FaAngleDown className='text-sm'/>
                </span>
                <span className='font-bold cursor-pointer flex items-center gap-2'>Programmes
                <FaAngleDown className='text-sm'/>
                </span>
                <span className='font-bold cursor-pointer flex items-center gap-2'>Admission
                <FaAngleDown className='text-sm'/></span>
                <span className='font-bold cursor-pointer flex items-center gap-2'>E-Portal
                <FaAngleDown className='text-sm'/></span>
                <span className='font-bold cursor-pointer flex items-center gap-2'>SQI Scholarship</span>
                <span className='font-bold cursor-pointer flex items-center gap-2'>News</span>
            </div>
            </nav>
        </div>


        {/* <div>
            <details>
                <summary>Details</summary>
                Something small enough to do anything
            </details>
        </div> */}
        </>
    )
}

export default SqiNavbar

