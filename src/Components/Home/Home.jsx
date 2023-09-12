import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <main className='Home'>
    <div className='Home-container'>
    <div className='Home-right'>
    <div className='Home-text'>
    <h2 className='Home-text-h2'>SO, YOU WANT TO TRAVEL TO</h2>
    <h1 className='Home-text-h1'>SPACE</h1>
    <p className='Home-text-p'>
    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover 
    kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
    </p>
    </div>
    </div>
    <div className='Home-left'>
    <div className='Home-button-container'>
    <button className='Home-button'>EXPLORE</button>
    </div>
    </div>
    </div>
    </main>
  )
}

export default Home