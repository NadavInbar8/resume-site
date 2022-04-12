// import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Layout.scss';
import FullpageWrapper from '../FullpageWrapper/FullpageWrapper.jsx';

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <div className='top-tags'></div>
        <div className='top-links'>
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
        <span className='tags top-tag-html'>&lt;html&gt;</span>
        <br />
        <span className='tags top-tag-body '>&lt;body&gt;</span>
        <FullpageWrapper />
        {/* <Outlet /> */}
        <span className='tags bottom-tags'>&lt;/body&gt;</span>
        <br />
        <span className='tags bottom-tag-html'>&lt;/html&gt;</span>
      </div>
    </div>
  );
};

export default Layout;
