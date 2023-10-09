import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  const activeStyle = "font-bold underline text-red-500";
  return (
    <header>
    <nav className='flex flex-row justify-between  mx-24'>
    <Link exact to="/">#VANILIFE</Link> 
    <div className='flex gap-2'>
    <NavLink to="/host" className={({isActive}) => isActive ? activeStyle : null }>Host</NavLink>
    <NavLink 
    to="/about"
    className={({isActive}) => isActive ? activeStyle : null }
  >
  About
</NavLink>

    <NavLink to="/vans" className={({isActive}) => isActive ? activeStyle : null }>Vans</NavLink>
    </div>
    </nav>
    </header>
  )
}

export default Header
