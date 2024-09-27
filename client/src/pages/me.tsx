import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import Header from "../components/header.tsx";

import { motion } from 'framer-motion';



function Me() {
  // define states
  const [onLoad, setOnLoad] = useState(false);
  
  // setTimeout(() => {
  //   setOnLoad(true);
  // }, 500);

  useEffect(() => {
    setOnLoad(true);
  }, []);

  
  return (
  <div>
    <div>
    
    <div className=''>
   
      <div className='inner-wrapper d-flex justify-content-between'>

      </div>
        <motion.div
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
        >
        {/* <div>
          <h6>Me</h6>
        </div> */}
        {onLoad && (
        <div className='me-box'>
          <h6><span>Location:</span><b> Stockholm</b></h6>
          <h6>I’m currently working as a <b>software/system developer</b>, where I build both desktop and web applications. My role also involves designing user interfaces with a strong focus on user experience. I strive to create simple, intuitive solutions that put the user at the center of everything I do.</h6>
          <h6 className='mt-4'> I hold a <b>Higher Education Diploma with specialization in Computer Engineering </b>from Mittuniversitetet, and a <b>Bachelor of Science in Informatics</b> from Högskolan Kristianstad</h6>
          <div className='mt-4'>
            <a href="https://www.linkedin.com/in/lucas-hammarstrand-schuber-80670320b/" target="_blank" rel="noopener noreferrer" title='LinkedIn'>
                    <FontAwesomeIcon icon={faLinkedin} className='me-brand-icon mx-2' />
                  </a>
            <a href="https://github.com/LucasHSchuber" target="_blank" rel="noopener noreferrer" title='GitHub'>
                <FontAwesomeIcon icon={faGithub} className='me-brand-icon' />
            </a>
          </div>
        </div>
        )}
        </motion.div>
      </div>
         
      </div>
    </div>
  );
}

export default Me;
