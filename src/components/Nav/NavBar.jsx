import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import styles from './NavBar.module.css'

const NavBar = ({
  scrolled,
  activeLink,
  onUpdateActiveLink,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-320 ease-in-out ${
        scrolled ? 'bg-[#121212]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className={`${styles.logo} w-9`}>
          <img src={logo} alt="Logo" />
        </Link>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="#home"
              className={`${
                activeLink === 'home'
                  ? 'text-blue-300'
                  : 'text-white'
              } font-normal text-opacity-75 hover:text-opacity-100`}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Link>
            <Link
              to="#skills"
              className={`${
                activeLink === 'skills'
                  ? 'text-blue-300'
                  : 'text-white'
              } font-normal text-opacity-75 hover:text-opacity-100`}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Link>
            <Link
              to="#projects"
              className={`${
                activeLink === 'projects'
                  ? 'text-blue-300'
                  : 'text-white'
              } font-normal text-opacity-75 hover:text-opacity-100`}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Link>
          </div>
          <div
            className={`${styles.socialIcon} flex items-center space-x-5`}
          >
            <a href="#">
              <img src={navIcon1} alt="" />
            </a>
            <a href="#">
              <img src={navIcon2} alt="" />
            </a>
            <a href="#">
              <img src={navIcon3} alt="" />
            </a>
          </div>
          <Link
            to="#connect"
            className="ml-6 bg-transparent border border-white text-white hover:bg-white hover:text-black px-6 py-3 font-bold transition-colors duration-300"
          >
            Let’s Connect
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
