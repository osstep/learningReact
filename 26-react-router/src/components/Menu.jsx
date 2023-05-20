import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
        <NavLink to="." end>Home</NavLink>
        <NavLink to="Contacts">Contacts</NavLink>
        <NavLink to="About">About</NavLink>
    </nav>
  )
}

export default Menu