import React from 'react'
import './nav.css'
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : '' }><TiHomeOutline /></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser /></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : '' }><BiBookAlt /></a>
      <a href="#services"onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active' : '' }><RiServiceFill /></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : '' }><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav