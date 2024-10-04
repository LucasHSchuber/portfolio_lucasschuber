import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//import apiConfig
import { API_URL } from '../../../apiConfig.js';

const Userpopupbox = () => {

    const [popUp, setPopUp] = useState(false);
    const [confirmPopUp, setConfirmPopUp] = useState(false);

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
        {popUp && (
            <div className={`user-popup-box ${popUp ? "popup-animation" : ""}`}>
                <div className='d-flex justify-content-between'>
                    <h6>Hello Stranger</h6>
                    <button className='close-popup-button' title='Close' onClick={() => setPopUp(false)}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <p>Your insights matter! Please select your role below to help me understand the purpose of your visit.</p>
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
    </div>
)
}

export default Userpopupbox