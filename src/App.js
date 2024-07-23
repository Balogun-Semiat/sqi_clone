import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaAngleDown } from "react-icons/fa6";
import SqiNavbar from './components/sqiass/Navbar'
import {FirstPage, 
  SecondPage, ThirdPage, 
  FourthPage, FifthPage, SixthPage,
   SeventhPage, EighthPage, 
   NinthPage, PageTen, Footer} from './components/sqiass/firstpage';
import Student from './components/sqiass/student'
import SecNavbar from './components/sqiass/SecNavbar';

const App = () => {
  return (
    <div>
      <SqiNavbar />
      {/* <SecNavbar /> */}
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
      <NinthPage />
      <PageTen />
      <Footer />
    </div>
  )
}

export default App

