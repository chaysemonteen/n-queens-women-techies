import React from 'react'
import styles from '../index.css'

const Navbar = () => {
  return (
    <div>
      <ul className='flex px-4'>
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
