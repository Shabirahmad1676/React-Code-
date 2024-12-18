import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          {/* <Link to='/'>Home</Link> */}
          <NavLink to='/' >Home</NavLink>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <NavLink to='/about'>About</NavLink>
          {/* <Link to='/about'>About</Link> */}
        </li>
      </ul>
    </div>
  )
}

export default Navbar