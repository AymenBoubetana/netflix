import React from 'react'
import './Background.css';
import background from '../Netflix_images/header-image.png';
const Background = () => {
  return (
    <div className='background'>
      <img src={background}/>
    </div>
  )
}

export default Background