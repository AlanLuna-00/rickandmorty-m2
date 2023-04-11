import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div class="footer">
            <p>Alan Luna 2023 - Todos los derechos reservados &copy; 2023</p>
            <a href="https://github.com/AlanLuna-00" target="_blank" rel="noopener noreferrer" class="github"><FontAwesomeIcon className='linkedin'icon={ faLinkedin } /></a>
            <a href="https://www.linkedin.com/in/alan-luna-304655214/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='github' icon={faGithub} /></a>
        </div>
    )
}

export default Footer