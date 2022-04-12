/* eslint-disable */
/* eslint-disable import/no-extraneous-dependencies  */
import React from 'react';
// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

import Home from '../Homepage/Homepage';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

const FullpageWrapper = (fullpageProps) => {
  const fullpageOptions = {
    anchors: ['home', 'about', 'work', 'contact'],
  };
  const FP = process.env.REACT_APP_FP;

  return (
    <ReactFullpage
      {...fullpageProps}
      anchors={fullpageOptions.anchors}
      licenseKey={FP}
      render={({ state, fullpageApi }) => {
        return (
          <div id='fullpage-wrapper'>
            <div className='section'>
              <Home />
            </div>
            <div className='section'>
              <About />
            </div>
            <div className='section'>
              <Work />
            </div>
            <div className='section'>
              <Contact />
            </div>

            <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button>
          </div>
        );
      }}
    />
  );
};

export default FullpageWrapper;
