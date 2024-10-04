import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import Header from "../components/header.tsx";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons'; 


import { motion } from 'framer-motion';



function Contact() {
  // define states
  const [onLoad, setOnLoad] = useState(false);
  

  useEffect(() => {
    setOnLoad(true);
  }, []);

  const handleMailClick = () => {
    const recipient = "lucas.hammarstrand@hotmail.com";
    const subject = "Hello Lucas!";
    const body = "Hi,";
    
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

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

        {onLoad && (
        <div className='contact-box'>
          <h6>0734343248, lucas.hammarstrand@hotmail.com</h6>
          <button className='button mailto-button' onClick={handleMailClick}><FontAwesomeIcon icon={faShareFromSquare} title='Mail Me' /></button>
        </div>
        )}
        </motion.div>
      </div>
         
      </div>
    </div>
  );
}

export default Contact;
