import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const HostLayout = () => {
  const activeStyle = "font-bold underline text-red-500";

  return (
    <>
    <nav className=' flex gap-2 justify-center' >
    <NavLink className={({isActive}) => isActive ? activeStyle : null } end to='.'>Dashboard</NavLink>
    <NavLink className={({isActive}) => isActive ? activeStyle : null } to="income">Income</NavLink>
    <NavLink className={({isActive}) => isActive ? activeStyle : null } to="reviews">Reviews</NavLink>
    <NavLink className={({isActive}) => isActive ? activeStyle : null } to="vans">Vans</NavLink>
   </nav>
    <Outlet/>
    </>
  )
}

export default HostLayout
