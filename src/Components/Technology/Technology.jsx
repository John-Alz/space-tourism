import React, { useState } from 'react'
import './Technology.scss'
import img from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import db from '../../data.json'

export default function Technology() {

    console.log(db.technology);

    const initialState = db.technology.find(tech => tech.name === "Launch vehicle")
    const [technology, setTechnology] = useState(initialState)

    const handleClick = (e) => {
        const nombre = e.target.name;
        console.log(nombre);
        const techFound = db.technology.find(tech => tech.name === nombre);
        setTechnology(techFound)
    }


  return (
    <div className='Technology'>
        <div className='Technology-container'>
        <div className='Technology-left'>
        <div className='Technology-ldivc'>
        <div className='Technology-lone'>
        <div>
        <p>02 </p>
        </div>
        <div>
        <h1>MEET YOUR CREW</h1>
        </div>
        </div>
        <div className='Technology-secTwo'>
        <div className='Technology-nav'>
        <ul className='Technology-ul'>
            <li className='Technology-li'>
            <a className='Technology-a' href='#' name="Launch vehicle" onClick={handleClick}>1</a>
            </li>
            <li className='Technology-li'>
            <a className='Technology-a' href='#' name="Spaceport" onClick={handleClick}>2</a>
            </li>
            <li className='Technology-li'>
            <a className='Technology-a' href='#' name="Space capsule" onClick={handleClick}>3</a>
            </li>
        </ul>
        </div>
        <div className='Technology-info'>
        <div className='Technology-terminology'>
        <h2>THE TERMINOLOGY…</h2>
        </div>

        <div className='Technology-vehicle'>
        <h1>{technology.name}</h1>
        </div>

        <div className='Technology-description'>
        <p>{technology.description}</p>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className='Technology-right'>
        <div className='Technology-rdivc'>
            <img className='Technology-img' src={technology.images.portrait} alt='img'/>
        </div>
        
        </div>
        </div>
    </div>
  )
}
