import React from 'react'
import imgLarge from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import imgShort from '../../assets/technology/image-launch-vehicle-landscape.jpg'

export default function Image() {

    const isLargeScreen = window.innerWidth >= 1200;

  return (
    <div>
       <img src={isLargeScreen ? {imgLarge} : imgShort} alt="Imagen" />
    </div>
  )
}
