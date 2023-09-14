import './Destination.scss'
import db from '../../data.json'
import { useState } from 'react';

export default function Destination() {


    const initialState = db.destinations.find(dest => dest.name === "Moon")

    const [destination, setDestination] = useState(initialState)
    const [selected, setSelected] = useState(false)



    const handleClick = (e) => {
        const nombre = e.target.name;
        const destinationFoud = db.destinations.find(dest => dest.name === nombre)
        setDestination(destinationFoud)
    }

    const handleSelected = () => {
        setSelected(!selected)
    }

  return (
    <div className='Destination'>
            <div className='Destination-container'>
    <div className='Destination-right'>
    <div className='Destination-rdivc'>
    <div className='Destination-rone'>
    <div>
        <p>01</p>
    </div>
    <div>
        <h1>Pick your destination</h1>
    </div>
        
    </div>
    <div className='Destination-rtwo'>
        <img className='Destination-rimg' src={destination.images.webp} alt='moon'/>
    </div>
    </div>
    </div>


    <div className='Destination-left'>
    <div className='Destination-ldivc'>
    <div className='Destination-nav'>
    <ul className='Destination-ul'>
          <li onClick={handleSelected} className={`Destination-li ${selected ? "Destination-isActive" : ""}`}>
            <a href="#" name="Moon" onClick={handleClick} className='Destination-a'>
            MOON
            </a>
          </li>
          <li className='Destination-li'>
            <a href='#' name="Mars" onClick={handleClick}  className='Destination-a'>
            MARS
            </a>
          </li>
          <li className='Destination-li'>
            <a href='#' name="Europa" onClick={handleClick}  className='Destination-a'>
            EUROPA
            </a>
          </li>
          <li className='Destination-li'>
            <a href='#' name="Titan" onClick={handleClick}  className='Destination-a'>
            TITAN
            </a>
          </li>
        </ul>
    </div>

    <div className='Destination-name'>
    <h1>{destination.name}</h1>
    </div>

    <div className='Destination-description'>
    <p>{destination.description}</p>
    </div>

    <div className='Destination-line'></div>

    <div className='Destination-data'>
    <div className='Destination-distance'>
    <div className='Destination-distanceone'>
        <p>AVG. DISTANCE</p>
    </div>
    <div className='Destination-distancetwo'>
        <h1>{destination.distance}</h1>
    </div>
    </div>

    <div className='Destination-time'>
    <div className='Destination-timeone'>
        <p>Est. travel time</p>
    </div>
    <div className='Destination-timetwo'>
        <h1>{destination.travel}</h1>
    </div>
    
    
    </div>
    </div>

    </div>
    </div>


    </div>
        
    </div>
  )
}
