import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div id='Navbar' className='navbar'>
        <img src={logo} alt="logo" />

        <ul className='nav-menu'>
            <li><a href="#Navbar">Home</a></li>
            <li><a href="#About">About Me</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar