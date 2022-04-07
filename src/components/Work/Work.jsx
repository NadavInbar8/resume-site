import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LoRGuardian1 from '../../assets/pics/LoR-Guardian-1.jpg';
import LoRGuardian2 from '../../assets/pics/LoR-Guardian-2.jpg';
import LoRGuardian3 from '../../assets/pics/LoR-Guardian-3.jpg';
import Taskflow1 from '../../assets/pics/Taskflow-1.jpg';
import Taskflow2 from '../../assets/pics/Taskflow-2.jpg';
import BirdTracker1 from '../../assets/pics/BirdTracker-1.jpg';
import ReactPiano from '../../assets/pics/ReactPiano.jpg';
import ReactCarousel from '../../assets/pics/React-Carousel.jpg';
import './Work.scss';

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const [works] = useState([
    {
      name: 'LoR Guardian',
      pics: [LoRGuardian1, LoRGuardian2, LoRGuardian3],
      strArray: ['L', 'o', 'R', ' ', 'G', 'u', 'a', 'r', 'd', 'i', 'a', 'n'],
      site: 'https://www.lorguardian.com',
      description: `Overlay Application for Riot’s card game Legends of Runeterra!
        it enhance your gameplay experience, capabilities, and show you a more diverse view to support you in every stage of the game.`,
    },
    {
      name: 'Taskflow',
      pics: [Taskflow1, Taskflow2],
      strArray: ['T', 'a', 's', 'k', 'f', 'l', 'o', 'w'],
      site: 'https://taskflow-nadav-tom-oded.herokuapp.com',
      description:
        'Task Management Application that helps you stay organized and keep track on the project that you and your team are working on.',
    },
    {
      name: 'Bird Tracker',
      pics: [BirdTracker1],
      strArray: ['B', 'i', 'r', 'd', ' ', 'T', 'r', 'a', 'c', 'k', 'e', 'r'],
      site: 'https://birbstracker.netlify.app',
      description:
        'React Application that I implemented infinite scrolling in React',
    },
    {
      name: 'Simple Piano',
      pics: [ReactPiano],
      strArray: ['S', 'i', 'm', 'p', 'l', 'e', ' ', 'P', 'i', 'a', 'n', 'o'],
      site: 'https://simplereactpiano.netlify.app',
      description:
        'React Piano Application that you can play notes with the keyboard keys',
    },
    {
      name: 'React Carousel',
      pics: [ReactCarousel],
      strArray: [
        'R',
        'e',
        'a',
        'c',
        't',
        ' ',
        'C',
        'a',
        'r',
        'o',
        'u',
        's',
        'e',
        'l',
      ],
      site: 'https://simplereactcarousel.netlify.app',
      description: 'My implementation of Pictures Carousel using React',
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
                  <div className='description'>
                    <h2 className='work-name'>{work.name}</h2>
                    <p className='work-description'>{work.description}</p>
                  </div>
                  <img
                    className='work-pic'
                    key={work.pics[idx]}
                    src={work.pics[0]}
                    alt={work.name}
                  />
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
