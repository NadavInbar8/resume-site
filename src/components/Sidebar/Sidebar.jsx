import './Sidebar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faScroll,
} from '@fortawesome/free-solid-svg-icons';

import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className='nav-bar'>
      <nav>
        <NavLink
          exact='true'
          to='/#home'
          className={
            location.hash === '#home' || location.pathname === '/'
              ? 'clicked'
              : ''
          }
          onClick={() => window.fullpage_api.moveTo('home')}
        >
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          <span>Home</span>
        </NavLink>
        <NavLink
          className={location.hash === '#about' ? 'about-link clicked' : ''}
          activeclassname='active'
          to='/#about'
          onClick={() => window.fullpage_api.moveTo('about')}
        >
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          <span>About</span>
        </NavLink>
        <NavLink
          className={
            location.hash === '#work' ||
            location.hash === '#work/1' ||
            location.hash === '#work/2'
              ? 'work-link clicked'
              : ''
          }
          activeclassname='active'
          to='/#work'
          onClick={() => window.fullpage_api.moveTo('work')}
        >
          <FontAwesomeIcon icon={faScroll} color='#4d4d4e' />
          <span>Work</span>
        </NavLink>
        <NavLink
          className={location.hash === '#contact' ? 'contact-link clicked' : ''}
          activeclassname='active'
          to='/#contact'
          onClick={() => window.fullpage_api.moveTo('contact')}
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
