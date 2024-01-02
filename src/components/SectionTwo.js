import React from 'react'
import './SectionTwo.css';
import photo from '../Netflix_images/feature-1.png'

const SectionTwo = () => {
  return (
    <div className='container'>
    
      <div className="Text">
        <h1>Enjoy On your TV.</h1>
        <h3>Watch on smart TVs,PlayStation Xbox.<br/>Chromecast Apple TV.</h3>
      </div>
      <img src={photo}  />
    </div>
   
  )
}

export default SectionTwo
