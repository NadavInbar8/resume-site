import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './Homepage.scss';

/////////////////////////////////
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['N', 'a', 'd', 'a', 'v'];
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];
  const jobArrayPhone1 = ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k'];
  const jobArrayPhone2 = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 6000);
  }, []);

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
              display='jobArray'
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArrayPhone1}
              idx={22}
              display='jobArrayPhone'
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArrayPhone2}
              idx={30}
              display='jobArrayPhone'
            />
          </h1>
          <h2>
            Fullstack Developer / React & Angular Developer / Volleyball Player
          </h2>
          <Link to='/contact' className='flat-button'>
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
          </div>
        </div>

        <Loader type='pacman' />
      </div>
    </>
  );
};

export default Home;
