import React from 'react';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import video from "../assets/videos/bg3.mp4";

function Layout({ children }) {

    const [loading, setLoading] = useState(true)
  

    useEffect(() => {
      console.log("STARTED RUNNING");
      // Check if the loader has already run
      if (!sessionStorage.getItem("loader")) {
        const timer = setTimeout(() => {
          sessionStorage.setItem("loader", "Yes");
          setLoading(false); 
        }, 4000);
        return () => clearTimeout(timer);
      } else {
        setLoading(false); 
      }
    }, []);

  return (
    <div>
        

        {loading ? (
        <div className='start-loader'>Lucas H. Schuber</div>
      ) : (

        

        <motion.div
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
          >
        <div>
        <video autoPlay loop muted className="background-video">
        <source  src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>



        <div className='outside-left d-flex '>
            <h6 className=''>Lucas H. Schuber Portfolio</h6>
            <div className='ml-4'>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className='brand-icon' />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className='brand-icon' />
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className='brand-icon' />
              </a>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className='brand-icon' />
              </a>
            </div>
          </div>
          
          <div className='outside-top d-flex '>
            <h6 className=''>Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.
            </h6>
          </div>

    <div className="wrapper">
    
   
   
      <div className="content">
        {children} 
      </div>

    </div>
    </div>
    </motion.div>
      )}
    </div>
  );
}

export default Layout;
