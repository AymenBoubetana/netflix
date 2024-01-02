import React from 'react'
import logo from '../Netflix_images/logo.png';
import load from '../Netflix_images/down-icon.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='Nav-bar'>
      <img className='img-logo' src={logo}/>
      <div className='Nav-list'>
       <button className='button-trans'>
        <img src={load}/> <p>English</p>
       </button>
       <button className='Sign-up'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar