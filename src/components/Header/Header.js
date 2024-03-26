import React from 'react';
import "./Header.css"
import { FaBars } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md'; 

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>  
        <FaBars/>
        <span> IndigoLearn</span>
      </div>
      <div >
        <span>BUY COURSES</span>
        <span className='list-items'>PROGRAMS</span>
        <span className='list-items'>FREE RESOURCES</span>
        <span className='list-items'>NEW RESOURCES</span>
      </div>
      <div className='login-signup logo'>
        <MdAccountCircle size={20} />
        <span >Log In/Sign Up</span>
      </div>
    </div>
  )
}

export default Header
