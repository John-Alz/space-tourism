import React, { useState } from 'react'
import './Header.scss'
import logo from '../../assets/shared/logo.svg'
import iconBurger from '../../assets/shared/icon-hamburger.svg'
import iconClose from '../../assets/shared/icon-close.svg'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {


  const [menu, setMenu] = useState(false)

  const location = useLocation();

  const handleToggle = () => {
    setMenu(!menu)
  }

  return (
    <header className='Header'>
      
      <a className='Header-logo'>
        <img src={logo} className='Header-img' alt='imgLogo'/>
      </a>

      <div className='Header-line'></div>

      <button onClick={handleToggle} className='Header-button'>
        <img className='Header-btnimg' src={menu ? iconClose :iconBurger} alt='iconClose'/>
      </button>

      <nav className={`Header-nav ${menu ? 'isActive' : ''}`}>
        <ul className='Header-ul'>
          <li className={`Header-li ${location.pathname === '/' ? 'active' : ''}`}>
            <NavLink to="/" className='Header-a' activeClassName="Header-active">
            00 HOME
            </NavLink>
          </li>
          <li className={`Header-li ${location.pathname === '/destination' ? 'active' : ''}`}>
            <NavLink to="/destination" className='Header-a' activeClassName="Header-active">
            01 DESTINATION
            </NavLink>
          </li>
          <li className={`Header-li ${location.pathname === '/crew' ? 'active' : ''}`}>
            <NavLink to="/crew" className='Header-a' activeClassName="Header-active">
            02 CREW
            </NavLink>
          </li>
          <li className={`Header-li ${location.pathname === '/technology' ? 'active' : ''}`}>
            <NavLink to="/technology" className='Header-a' activeClassName="Header-active">
            03 TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>

    </header>
  )
}
