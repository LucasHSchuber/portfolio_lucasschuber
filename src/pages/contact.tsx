import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import Header from "../components/header.tsx";

import { motion } from 'framer-motion';



function Contact() {
  // define states
  const [onLoad, setOnLoad] = useState(false);
  
//   setTimeout(() => {
//     setOnLoad(true);
//   }, 500);

useEffect(() => {
  setOnLoad(true);
}, []);

  return (
  <div>
    <div>
    
    <div className=''>
   
      <div className='inner-wrapper d-flex justify-content-between'>
        
        {/* <div className='left-inner-wrapper'>
          <h5>Lucas H. Schuber</h5>
          <h6>Fullstack Developer & Digital Designer</h6>
          <hr></hr>
          < Header />
        </div> */}
        
      </div>
        <motion.div
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
        >
        {/* <div>
          <h6>Contact</h6>
        </div> */}
        {onLoad && (
        <div className='contact-box'>
          <h6>0734343248, lucas.hammarstrand@hotmail.com</h6>
        </div>
        )}
        </motion.div>
      </div>
         
      </div>
    </div>
  );
}

export default Contact;
