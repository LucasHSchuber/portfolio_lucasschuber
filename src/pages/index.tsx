import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import Header from "../components/header.tsx";

function Index() {
  // define states
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
    <div className='wrapper'>
      {loading ? (
        <div className='start-loader'>Lucas H. Schuber</div>
      ) : (
      <div className='inner-wrapper d-flex justify-content-between'>
        <div className='left-inner-wrapper'>
          <h5>Lucas H. Schuber</h5>
          <h6>Fullstack Developer & Digital Designer</h6>
          <hr></hr>
          < Header />

        </div>
        <div className='right-inner-wrapper'>
          <h6>Photographer Portal Desktop Application</h6>
          <h6>Meditation Web Application</h6>
          <h6>AIAS Artificial Intellegence Accounting System</h6>
          <h6>Resturant Egg benedict Application</h6>
        </div>
      </div>
      )}
    </div>
  );
}

export default Index;
