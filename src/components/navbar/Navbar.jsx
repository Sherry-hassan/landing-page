import React, { useState } from 'react'
import '../navbar/navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav>
        <button class="menu-toggle" onClick={toggleMenu}>Menu</button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <button className='buy-now'>Buy Now</button>
      </nav>
    </>
  )
}

export default Navbar