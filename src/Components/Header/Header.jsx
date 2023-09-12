import React from 'react'
import './Header.scss'
import logo from '../../assets/shared/logo.svg'

export default function Header() {
  return (
    <header className='Header'>
      
      <a className='Header-logo'>
        <img src={logo} className='Header-img' alt='imgLogo'/>
      </a>

      <div className='Header-line'></div>

      <nav className='Header-nav'>
        <ul className='Header-ul'>
          <li className='Header-li'>
            <a className='Header-a'>
            00 HOME
            </a>
          </li>
          <li className='Header-li'>
            <a className='Header-a'>
            01 DESTINATION
            </a>
          </li>
          <li className='Header-li'>
            <a className='Header-a'>
            02 CREW
            </a>
          </li>
          <li className='Header-liF'>
            <a className='Header-a'>
            03 TECHNOLOGY
            </a>
          </li>
        </ul>
      </nav>

    </header>
  )
}
