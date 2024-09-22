import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import Header from "../components/header.tsx";

import { motion } from 'framer-motion';

function Skills() {
  // define states
  const [onLoad, setOnLoad] = useState(false);
  
  setTimeout(() => {
    setOnLoad(true);
  }, 500);

  return (
  <div>
    <div>

    <div className=''>

      <div className='inner-wrapper d-flex justify-content-between'>
        
        <div className='left-inner-wrapper'>
          <h5>Lucas H. Schuber</h5>
          <h6>Fullstack Developer & Digital Designer</h6>
          <hr></hr>
          < Header />
        </div>
        
      </div>
        <motion.div
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
        >
        <div>
          <h6>Skills</h6>
        </div>
        {onLoad && (
        <div className='skills-box'>
          {/* <h5 className='page-header'>Skills</h5> */}
          <h5 >Programming</h5>
          <h6 >React.js</h6>
          <h6 >Electron.js</h6>
          <h6 >Node.js</h6>
          <h6 >C#/.NET</h6>
          {/* <hr style={{ width:"10em" }}></hr> */}
          <h6 >GitHub</h6>
          <h6 >SQL/NoSQL/SQLite databases</h6>
          <h6 >Cloud Deployment with Azure, Vercel & Netlify</h6>
          {/* <hr style={{ width:"15em" }}></hr> */}'
          <br></br>
          <h5 >UX</h5>
          <h6 >Figma</h6>
          <br></br>
          {/* <hr style={{ width:"15em" }}></hr> */}
          <h5 >Design</h5>
          <h6 >Abode Series</h6>
        </div>
        )}
        </motion.div>
      </div>
         
      </div>
    </div>
  );
}

export default Skills;
