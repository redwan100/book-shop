import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-100 flex justify-between items-center p-3 rounded-md sticky top-0 left-0'>
      <h1 className='text-xl font-semibold'>Brand</h1>

      <ul className='flex gap-3 text-lg'>
        <li className=''>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/books'}>Books</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header