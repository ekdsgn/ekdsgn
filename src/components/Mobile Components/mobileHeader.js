import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const MobileHeader = () => {

  const navigate = useNavigate();
  
  return (
    <nav className="nav-bar">
      
      <div className='nav-title'>
      <h1>EKDSGN</h1>
      </div>

      <ul>
        <li>
          <div className='icon-ctn'>
            <a>
              <FontAwesomeIcon className="fa-icon" icon={faVolumeHigh} />
            </a>
          </div>
        </li>

        <li>
          <div className='icon-ctn'>
            <a onClick={() => navigate('/contact-us')}>
              <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
            </a>
          </div>
        </li>
      </ul>

    </nav>

  )
}

export default MobileHeader;