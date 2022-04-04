import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LoRGuardian1 from '../../assets/pics/LoR-Guardian-1.jpg';
import LoRGuardian2 from '../../assets/pics/LoR-Guardian-2.jpg';
import LoRGuardian3 from '../../assets/pics/LoR-Guardian-3.jpg';
import Taskflow1 from '../../assets/pics/Taskflow-1.jpg';
import Taskflow2 from '../../assets/pics/Taskflow-2.jpg';
import './Work.scss';

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const [works, setWorks] = useState([
    { name: 'LoR Guardian', pics: [LoRGuardian1, LoRGuardian2, LoRGuardian3] },
    { name: 'Taskflow', pics: [Taskflow1, Taskflow2] },
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
                {work.pics.map((pic) => (
                  <img
                    className='work-pic'
                    key={pic}
                    src={pic}
                    alt={work.name}
                  />
                ))}
              </li>
            ))}
          </ul>
          {/* <p>
            I'm Junior Full-stack developer with one year of experience,
            Passionate about technology, striving to be the best, fast
            self-learner, and a team player determined and hardworking and have
            the desire to grow professionally.
          </p>
          <p align='LEFT'>
            I'm confident in my work, curious about learning more, and and
            always trying to grow professionally.
          </p>
          <p>
            Additionally, I’m a volleyball player (and manager), former robotics
            team leader (First Robotics Competitions).
          </p>
        </div>

        <div className='profile-cont'>
          <img className='profile-pic' src={profile} alt='Profile' />
        </div> */}
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Work;
