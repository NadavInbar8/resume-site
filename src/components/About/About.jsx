import { useEffect, useState } from 'react';
import profile from '../../assets/pics/profile.jpg';
import AnimatedLetters from '../AnimatedLetters';
import './About.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
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
        </div>
      </div>
    </>
  );
};

export default About;
