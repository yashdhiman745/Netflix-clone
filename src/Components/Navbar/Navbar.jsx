import React, { useEffect, useRef } from 'react'
import "./navbar.css"
import logo from "../../netflix_react_assets/logo.png"
import search from "../../netflix_react_assets/search_icon.svg"
import bellicon from "../../netflix_react_assets/bell_icon.svg"
import profileimg from "../../netflix_react_assets/profile_img.png"
import careticon from "../../netflix_react_assets/caret_icon.svg"
import { logout } from '../../firebase'

const Navbar = () => {
  const navref=useRef(null)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>=100){
        console.log("scrolled");
        navref.current.classList.add("nav-dark")
        // navref.current.style.background="black"
      }
      else{
        navref.current.classList.remove("nav-dark")
      }
    })

  },[])
  return (
    <div ref={navref} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className='icons'/>
        <p>Children</p>
        <img src={bellicon} alt="" className='icons'/>
        <div className="nav-profile">
        <img src={profileimg} alt="" className='profile'/>
        <img src={careticon} />
        <div className="dropdown">
          <p onClick={()=>logout()}>Sign out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar