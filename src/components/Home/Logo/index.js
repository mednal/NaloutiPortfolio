import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-s.jpg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()


  return (
    
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />

    
    </div>
  )
}

export default Logo