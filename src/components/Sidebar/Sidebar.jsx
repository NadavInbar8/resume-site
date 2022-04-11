import './Sidebar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faScroll,
} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          <span>Home</span>
        </NavLink>
        <NavLink activeclassname='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          <span>About</span>
        </NavLink>
        <NavLink activeclassname='active' className='work-link' to='/work'>
          <FontAwesomeIcon icon={faScroll} color='#4d4d4e' />
          <span>Work</span>
        </NavLink>
        <NavLink
          activeclassname='active'
          className='contact-link'
          to='/contact'
        >
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          <span>Contact</span>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/nadav-inbar/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/NadavInbar8'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
