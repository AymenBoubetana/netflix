import React from 'react'
import photo from '../Netflix_images/feature-3.png';
import './SectionFour.css'
const SectionFour = () => {
  return (
    <div className='containerrr'>
    <div className="Text">
      <h1>Enjoy On your TV.</h1>
      <h3>Watch on smart TVs,PlayStation Xbox.<br/>Chromecast Apple TV.</h3>
    </div>
    <img src={photo}  />
  </div>
  )
}

export default SectionFour