import React, { useState } from 'react'
import './Header.scss'
import logo from '../../assets/shared/logo.svg'
import iconBurger from '../../assets/shared/icon-hamburger.svg'
import iconClose from '../../assets/shared/icon-close.svg'
import { Link } from 'react-router-dom'

export default function Header() {


  const [menu, setMenu] = useState(false)

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
          <li className='Header-li'>
            <Link to="/" className='Header-a'>
            00 HOME
            </Link>
          </li>
          <li className='Header-li'>
            <Link to="/destination" className='Header-a'>
            01 DESTINATION
            </Link>
          </li>
          <li className='Header-li'>
            <Link to="/crew" className='Header-a'>
            02 CREW
            </Link>
          </li>
          <li className='Header-li'>
            <Link to="/technology" className='Header-a'>
            03 TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}
