/* eslint-disable */
/* eslint-disable import/no-extraneous-dependencies  */
import React, { useEffect, useState } from 'react';
// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

import Home from '../Homepage/Homepage';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import './FullpageWrapper.scss';
import arrow from '../../assets/pics/arrow_w.svg';

const FullpageWrapper = (fullpageProps) => {
  const fullpageOptions = {
    anchors: ['home', 'about', 'work', 'contact'],
  };
  const FP = process.env.REACT_APP_FP;

  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <ReactFullpage
      {...fullpageProps}
      anchors={fullpageOptions.anchors}
      licenseKey={FP}
      // controlArrows={[
      //   `<div class="fp-controlArrow"><img src={${arrow}} alt={'arrow'} /></div>`,
      //   `<div class="fp-controlArrow"><img src={arrow} alt={'arrow'} /></div>`,
      // ]}
      render={({ state, fullpageApi }) => {
        return (
          <div id='fullpage-wrapper'>
            <div className='section'>
              <Home />
            </div>
            <div className='section'>
              <About />
            </div>
            {isDesktop ? (
              <div className='section work-sec'>
                <Work />
              </div>
            ) : (
              <div className='section phone-work-sec'>
                <div className='slide'>
                  <Work />
                </div>
                <div className='slide'></div>
                <div className='slide'></div>
              </div>
            )}
            <div className='section'>
              <Contact />
            </div>
          </div>
        );
      }}
    />
  );
};

export default FullpageWrapper;
