import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Typewriter from 'typewriter-effect';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = "mohamed"


  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>  
            <span className={`${letterClass} _14`}> 
            <Typewriter 
   options={{
    strings: ['mohamed', 'web Developer','software enginner'],
    autoStart: true,
    loop: true,
    pauseFor:1000
  }}
/>
            </span>  
          
   
  
          </h1>
          <h2>Full Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a href='cv_Mohamed_Nalouti.pdf' download="cv_Mohamed_Nalouti.pdf" className="flat-button" >
              RESUME
          </a>
        </div>
        <Logo />
      </div>

      <Loader type="semi-circle-spin" />
    </>
  )
}

export default Home