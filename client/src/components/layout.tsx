import React from 'react';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import { API_URL } from '../../apiConfig.js';

import video from "../assets/videos/bg3.mp4";

import Header from './header.js';

function Layout({ children }) {

    const [loading, setLoading] = useState(true)
    const [colorfy, setColorfy] = useState(true)
    const [popUp, setPopUp] = useState(false)
    const [confirmPopUp, setConfirmPopUp] = useState(false)
  

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

    useEffect(() => {
      if (!sessionStorage.getItem("popup")) {
        const timer = setTimeout(() => {
            setPopUp(true);
            sessionStorage.setItem("popup", "Yes");
        }, 10000);
        return () => clearTimeout(timer)
      } else {
        setPopUp(false); 
      }
    }, []);


    const sendClickData = (role) => {
      console.log('API_URL', API_URL);
      setConfirmPopUp(true);
      fetch(`${API_URL}send-email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ role }),
      })
      .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send email');
        }
        return response.json();
      })
      .then(data => {
        console.log('Email sent:', data);
          setConfirmPopUp(true);
          setPopUp(false);
      })
      .catch((error) => {
          console.error('Error:', error);
          // setConfirmPopUp(true);
          setPopUp(false);
      });
      setPopUp(false); 
    };


    useEffect(() => {
      if (confirmPopUp) {
        const timer = setTimeout(() => {
            setConfirmPopUp(false);
        }, 3000);
        return () => clearTimeout(timer)
      };
    }, [confirmPopUp]);



    
  return (
    <div>
        {loading ? (
         <div className='start-loader mr-5'>Lucas H. Schuber</div>
        ) : (

        <motion.div
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
          >


          {popUp && (
            <div className={`user-popup-box ${popUp ? "popup-animation" : ""}`}>
                  <div className='d-flex justify-content-between'>
                    <h6>Hello Stranger</h6>
                    <button className='close-popup-button' title='Close' onClick={() => setPopUp(false)}><FontAwesomeIcon icon={faTimes} /></button>
                  </div>
                  <p className='mt-2'>Your insights matter! Please select your role below to help me understand the purpose of your visit.</p>
                  <div className='mt-4'>
                    <button className='user-popup-button' onClick={() => sendClickData('Visitor')}>Visitor</button>
                    <button className='user-popup-button mx-2' onClick={() => sendClickData('Recruiter')}>Recruiter</button>
                  </div>
            </div>
          )}
          {confirmPopUp && (
            <div className={`user-popup-confirm-box ${confirmPopUp ? "popup-confrim-animation" : ""}`}>
                    <h6>Thank you!</h6>
            </div>
          )} 

          {/* <div className={popUp ? "fade-page" : ""}> */}
          <div>
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

     </div>
  );
}

export default Layout;
