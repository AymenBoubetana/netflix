import React from 'react'
import './CenterText.css'
const CenterText = () => {
  return (
    <div className='center-text'>
      <h1>
        Unlimited movies, Tv <br/>Shows and more.
      </h1>
      <p className='pepe'>
        Watch anywhere. Cancel anytime.
      </p>
      <p className='pee'>
        Ready to watch? Enter your E-mail to create an accounte and enjoy.
      </p>
      <div className='info-nav'>
        <input type="email" placeholder='Enter you E-mail' className='Register'/>
        <button>
          Get Started &gt;

        </button>
      </div>
    </div>
  )
}

export default CenterText