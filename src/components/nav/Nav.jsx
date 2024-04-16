import React from 'react'
import './nav.css'
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <a href="#"><TiHomeOutline /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><TiHomeOutline /></a>
      <a href="#services"><TiHomeOutline /></a>
      <a href="#contact"><TiHomeOutline /></a>
    </nav>
  )
}

export default Nav