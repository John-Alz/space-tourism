import React, { useState } from 'react'
import './Crew.scss'
import db from '../../data.json'

export default function Crew() {

    console.log(db.crew);

    const initialState = db.crew.find(per => per.name === 'Douglas Hurley')

    const [person, setPerson] = useState(initialState)

    console.log(person.role);
    console.log(person);

    const handleSubmit = (e) => {
        const nombre = e.target.name;
        console.log(nombre);
        const personFound = db.crew.find(per => per.name === nombre)
        setPerson(personFound)
        console.log(personFound);
        console.log("funcionaaa");
    }


  return (
    <div className='Crew'>
        <div className='Crew-container'>
        <div className='Crew-left'>
        <div className='Crew-ldivc'>
        <div className='Crew-lone'>
        <div>
        <p>02 </p>
        </div>
        <div>
        <h1>MEET YOUR CREW</h1>
        </div>
        </div>

        <div className='Crew-info'>
        <div className='Crew-profetion'>
        <h2>{person.role}</h2>
        </div>

        <div className='Crew-name'>
        <h1>{person.name}</h1>
        </div>

        <div className='Crew-description'>
        <p>{person.bio}</p>
        </div>
        <div className='Crew-nav'>
        <ul className='Crew-ul'>
            <li className='Crew-li'>
            <a className='Crew-a' href='#' name='Douglas Hurley' onClick={handleSubmit}>ㅤ</a>
            </li>
            <li className='Crew-li'>
            <a className='Crew-a' href='#'  name='Mark Shuttleworth' onClick={handleSubmit}>ㅤ</a>
            </li>
            <li className='Crew-li'>
            <a className='Crew-a' href='#'  name="Victor Glover" onClick={handleSubmit}>ㅤ</a>
            </li>
            <li className='Crew-li'>
            <a className='Crew-a' href='#'  name="Anousheh Ansari" onClick={handleSubmit}>ㅤ</a>
            </li>
        </ul>
        </div>
        </div>


        

        </div>
        </div>

        <div className='Crew-right'>
        <div className='Crew-rdivc'>
        <img src={person.images.png} alt='img'/>
        </div>
        </div>

        </div>
    </div>
  )
}
