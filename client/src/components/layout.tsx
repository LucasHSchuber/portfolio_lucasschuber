import React from 'react';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

// import fontawwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import media
import video from "../assets/videos/bg3.mp4";
import bgImage from "../assets/images/bg_phones.png";

//import components
import Header from './header.js';
import Userpopupbox from '../assets/js/userpopupbox.js';


function Layout({ children }) {

  const [loading, setLoading] = useState(true)
  const [colorfy, setColorfy] = useState(true)


  useEffect(() => {
    console.log("STARTED RUNNING");
    // Check if the loader has already run
    if (!sessionStorage.getItem("loader")) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("loader", "Yes");
        setLoading(false); 
      }, 3700);
      return () => clearTimeout(timer);
    } else {
      setLoading(false); 
    }
  }, []);


  const colorfyBg = () => {
    setColorfy(!colorfy)
  };


  return (
    <div className='layout'>
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
            {/* On larger screens */}
            <video autoPlay loop muted playsInline className={`background-video ${colorfy ? "colorfy-bg" : ""}`}>
            <source  src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            {/* On smaller screens - phones */}
            <img src={bgImage} alt="Background image" className={`background-image ${colorfy ? "colorfy-bg" : ""}`}></img>

            <div className='outside-bottom d-flex '>
              <h6 className=''>Lucas H. Schuber Portfolio</h6>
              <div className='ml-4'>
                <a href="https://www.linkedin.com/in/lucas-h-schuber-80670320b" target="_blank" rel="noopener noreferrer" title='LinkedIn'>
                  <FontAwesomeIcon icon={faLinkedin} className='brand-icon' />
                </a>
                <a href="https://github.com/LucasHSchuber" target="_blank" rel="noopener noreferrer" title='GitHub'>
                  <FontAwesomeIcon icon={faGithub} className='brand-icon' />
                </a>
                <a href="https://www.facebook.com/lucas.h.schuber/" target="_blank" rel="noopener noreferrer" title='Facebook'>
                  <FontAwesomeIcon icon={faFacebook} className='brand-icon' />
                </a>
                <a href="https://instagram.com/lucasschuber" target="_blank" rel="noopener noreferrer" title='Instagram'>
                  <FontAwesomeIcon icon={faInstagram} className='brand-icon' />
                </a>
              </div>
            </div>

            
            <div className='outside-top d-flex '>
              <h6 className=''>Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretariBonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.
              </h6>
            </div>


            <div className="wrapper" >  
              <div className='left-inner-wrapper'>
                <h5>Lucas H. Schuber</h5>
                <div className='d-flex'>
                  <h6>Fullstack Developer & Digital Designer</h6>
                  <button className='ml-5 color-button' title={`${colorfy ? "Give Background Less Of Life" : "Give Background A Bit Of Life"}`} onClick={() => colorfyBg()}>{colorfy ? "Greyify" : "Colorfy"}</button>
                </div>
                <hr />
                <Header colorfy={colorfy} />
              </div> 
              <div className='content'>
              {children}
              </div> 
            </div>

        </div>
       </motion.div>
        )}


        < Userpopupbox />
     </div>
  );
}

export default Layout;
