import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import Header from "../components/header.tsx";

function Me() {
  // define states
  
  
  return (
    <div className='wrapper'>

      <div className='inner-wrapper d-flex justify-content-between'>
        <div className='left-inner-wrapper'>
          <h5>Lucas H. Schuber</h5>
          <h6>Fullstack Developer & Digital Designer</h6>
          <hr></hr>
          < Header />

        </div>
        
      </div>

    </div>
  );
}

export default Me;
