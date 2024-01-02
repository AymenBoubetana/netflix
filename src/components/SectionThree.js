import React from 'react'
import photo from '../Netflix_images/feature-2.png'
import './SectionThree.css'
const SectionThree = () => {
  return (
    <div className='containerr'>
      <img src={photo}  />
      <div className="Text">
        <h1>Enjoy On your TV.</h1>
        <h3>Watch on smart TVs,PlayStation Xbox.<br/>Chromecast Apple TV.</h3>
      </div>
      
    </div>
  )
}

export default SectionThree