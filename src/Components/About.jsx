import React from 'react'
import aboutImage from "../images/about.png"

const About = () => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img  src={aboutImage} alt={aboutImage} />
        </div>
        <div className='about-text'>
            <h1>RECUERDA</h1>
            <p> Los locos abren los caminos que mas tarde recorren los sabios. </p>
               
        </div>

    </div>
  )
}

export default About