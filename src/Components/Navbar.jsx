import React, { useState } from 'react'
import logo from "../images/logo.png"
import  { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if(window.scrollY  >= 200){
            setNav(true);
        } else{
            setNav(false)
            }
    }

    window.addEventListener("scroll", changeBackground)
  return (
    <nav className={nav ? "nav active"  : "nav"}>
         <Link to="#"  className="logo" >
          <img src={logo} alt={logo} /></Link>
            <input className='menu-btn'  type='checkbox' id='menu-btn' />
                 <label htmlFor='menu-btn' className='menu-icon'>
                    <span className='nav-icon'/>
                 </label>
                 <ul className='menu'>
                    <li><Link to="#"> Header </Link></li>
                    <li><Link to="features"> Feature </Link></li>
                    <li><Link to="#"> Offert </Link></li>
                    <li><Link to="#"> About </Link></li>
                    <li><Link to="#"> Contact </Link></li>
                 </ul>
    </nav>
  )
}



export default Navbar;