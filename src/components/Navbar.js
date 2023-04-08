import React from 'react'
import Logo from '../assets/burgerlogo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='main'>
        <img src={Logo} alt="" />
        <div className='mainLink'>
            <Link to={'/'}>Home</Link>
            <Link to={'/menu'}>Menu</Link>
            <Link to={'/aboutUs'}>About Us</Link>
            <Link to={'/contact'}>Contact</Link>

        </div>
    </div>
    </div>
  )
}

export default Navbar
