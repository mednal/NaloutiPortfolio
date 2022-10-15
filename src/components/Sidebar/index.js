import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtittle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div  className='nav-bar'>
        <Link className='logo' to="/">
            <img src ={LogoS} alt="logo"/>
            <img className='sub-logo' src ={LogoSubtittle} alt="slobodan"/>
        </Link>
<nav>
    <NavLink exact='true' activeclassname="active" tp="">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
    </NavLink>

    <NavLink exact='true' activeclassname="active" tp="">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
    </NavLink>

    <NavLink exact='true' activeclassname="active" tp="">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
    </NavLink>
</nav>
<ul>
    <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nalouti-mohamed/">
            <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"> </FontAwesomeIcon>
        </a>
    </li>
    <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/mednal">
            <FontAwesomeIcon icon={faGithub} color="4d4d4e"> </FontAwesomeIcon>
        </a>
    </li>
</ul>
    </div>
)

export default Sidebar