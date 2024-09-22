import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import Header from "../components/header.tsx";

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import projects from "../assets/js/projects.js";

// import video from "../assets/videos/bg2.mp4";

function Index() {
  // define states
  // const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
    console.log('projects', projects);
  }, [projects]);

  return (

    <div>
      {/* {loading ? (
        <div className='start-loader'>Lucas H. Schuber</div>
      ) : ( */}
        <div>  
          <div className=''>
            <div className='inner-wrapper d-flex justify-content-between'>
              <div className='left-inner-wrapper'>
                <h5>Lucas H. Schuber</h5>
                <h6>Fullstack Developer & Digital Designer</h6>
                <hr />
                <Header />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
              >
                <div className='right-inner-wrapper'>
                  {projects && projects.map((project, index) => (
                    <div key={index}>
                    <h6><span>{project.info}</span>{project.project}</h6>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
         
        </div>
      {/* )} */}
    </div>
 
  );
}

export default Index;
