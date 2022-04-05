import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LoRGuardian1 from '../../assets/pics/LoR-Guardian-1.jpg';
import LoRGuardian2 from '../../assets/pics/LoR-Guardian-2.jpg';
import LoRGuardian3 from '../../assets/pics/LoR-Guardian-3.jpg';
import Taskflow1 from '../../assets/pics/Taskflow-1.jpg';
import Taskflow2 from '../../assets/pics/Taskflow-2.jpg';
import BirdTracker1 from '../../assets/pics/BirdTracker-1.jpg';
import './Work.scss';

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const [works] = useState([
    {
      name: 'LoR Guardian',
      pics: [LoRGuardian1, LoRGuardian2, LoRGuardian3],
      strArray: ['L', 'o', 'R', ' ', 'G', 'u', 'a', 'r', 'd', 'i', 'a', 'n'],
      site: 'https://www.lorguardian.com',
    },
    {
      name: 'Taskflow',
      pics: [Taskflow1, Taskflow2],
      strArray: ['T', 'a', 's', 'k', 'f', 'l', 'o', 'w'],
      site: 'https://taskflow-nadav-tom-oded.herokuapp.com',
    },
    {
      name: 'Bird Tracker',
      pics: [BirdTracker1],
      strArray: ['B', 'i', 'r', 'd', ' ', 'T', 'r', 'a', 'c', 'k', 'e', 'r'],
      site: 'https://birbstracker.netlify.app',
    },
  ]);

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className='container work-page'>
        <div className='text-zone'>
          <h1 className='title-text'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k', '.']}
              idx={15}
            />
          </h1>
          <ul className='work-gallery'>
            {works.map((work, idx) => (
              <li key={`${work.name}-${idx}`} className='work'>
                <a href={work.site} target='_blank' rel='noreferrer'>
                  <img
                    className='work-pic'
                    key={work.pics[idx]}
                    src={work.pics[0]}
                    alt={work.name}
                  />
                  <h2>{work.name}</h2>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Work;
