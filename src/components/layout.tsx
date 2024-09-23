import React from 'react';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import video from "../assets/videos/bg3.mp4";

import Header from './header';

function Layout({ children }) {

    const [loading, setLoading] = useState(true)
    const [colorfy, setColorfy] = useState(true)
    const [popUp, setPopUp] = useState(false)
  

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


    const colorfyBg = () => {
      setColorfy(!colorfy)
    };

    useEffect(() => {
      // if (!sessionStorage.getItem("popup")) {
        const timer = setTimeout(() => {
            setPopUp(true);
            sessionStorage.setItem("popup", "Yes");
        }, 2000);
        return () => clearTimeout(timer)
      // } else {
      //   setPopUp(false); 
      // }
    }, []);



    const sendClickData = (role) => {
      setPopUp(false);
      fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ role }),
      })
      .then(response => response.json())
      .then(data => {
          console.log(`Email sent for ${role}`);
          setPopUp(false);
      })
      .catch((error) => {
          console.error('Error:', error);
          setPopUp(false);
      });
  };

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

          {popUp && (
            <div className={`user-popup-box ${popUp ? "popup-animation" : ""}`}>
                  <h6>What's the purpose of your visit?</h6>
                  <p>By spcificying your role below you will inform me on the purpose of your visit to this portfolio</p>
                  <button className='user-popup-button' onClick={() => sendClickData('Visitor')}>Visitor</button>
                  <button className='user-popup-button mx-2' onClick={() => sendClickData('Recruiter')}>Recruiter</button>
            </div>
            )}

            <video autoPlay loop muted className={`background-video ${colorfy ? "colorfy-bg" : ""}`}>
            <source  src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>

            <div className='outside-left d-flex '>
              <h6 className=''>Lucas H. Schuber Portfolio</h6>
              <div className='ml-4'>
                <a href="https://www.linkedin.com/in/lucas-hammarstrand-schuber-80670320b/" target="_blank" rel="noopener noreferrer" title='LinkedIn'>
                  <FontAwesomeIcon icon={faLinkedin} className='brand-icon' />
                </a>
                <a href="https://instagram.com/lucasschuber" target="_blank" rel="noopener noreferrer" title='Instagram'>
                  <FontAwesomeIcon icon={faInstagram} className='brand-icon' />
                </a>
                <a href="https://github.com/LucasHSchuber" target="_blank" rel="noopener noreferrer" title='GitHub'>
                  <FontAwesomeIcon icon={faGithub} className='brand-icon' />
                </a>
                <a href="https://www.facebook.com/lucas.h.schuber/" target="_blank" rel="noopener noreferrer" title='Facebook'>
                  <FontAwesomeIcon icon={faFacebook} className='brand-icon' />
                </a>
              </div>
            </div>
            
            <div className='outside-top d-flex '>
              <h6 className=''>Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretariBonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.Bonum diem habeas.Modo scivi te hoc interpretari.
              </h6>
            </div>

            <div className="wrapper">  
              <div className='left-inner-wrapper'>
                <h5>Lucas H. Schuber</h5>
                <div className='d-flex'>
                  <h6>Fullstack Developer & Digital Designer</h6>
                  <button className='ml-5 color-button' title={`${colorfy ? "Give Background Less Of Life" : "Give Background A Bit Of Life"}`} onClick={() => colorfyBg()}>{colorfy ? "Greyify" : "Colorfy"}</button>
                </div>
                <hr />
                <Header colorfy={colorfy} />
              </div> 
              {children} 
            </div>

        </div>
       </motion.div>
        )}

     </div>
  );
}

export default Layout;
