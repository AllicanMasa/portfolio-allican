import React, { useEffect, useRef } from 'react'
import './navbar.css'

const Navbar = () => {
  const navbarRef = useRef(null)

  useEffect(() => {
    const navbar = navbarRef.current

    const handleMouseMove = (e) => {
      const rect = navbar.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      navbar.style.setProperty('--x', `${x}px`)
      navbar.style.setProperty('--y', `${y}px`)
    }

    navbar.addEventListener('mousemove', handleMouseMove)
    return () => navbar.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="navbar" ref={navbarRef}>
      <h1>GtKM!</h1>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#socials">Socials</a></li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
