import React from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    return (
        <>
        <div className="navbar">
           <div className="navibar-container container ">
               <Link to='/' className="navibar-logo" >LOGO</Link>
               <div className="menu-icon"></div>
           </div>
        </div>
        </>
    )
}

export default Navbar
