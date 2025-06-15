import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import searchicon from '../../assets/search_icon.svg'
import profileicon from '../../assets/profile_img.png'
import bellicon from '../../assets/bell_icon.svg'
import dropicon from '../../assets/caret_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={Logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Tv Show</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My-List</li>
            </ul>
        </div>
        <div className="navbar-right">

            <img src={searchicon} alt=""  className='icons'/>
            <p>Children</p>
            <img src={bellicon} alt=""  className='icons'/>
            <div className="navbar-profile">
                <img src={profileicon} alt=""  className='profile'/>
                <img src={dropicon} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Navbar