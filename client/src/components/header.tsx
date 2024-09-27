// header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


interface HeaderProps {
    colorfy: boolean; 
}

const Header: React.FC<HeaderProps> = ({ colorfy }) => {
    //define states
    const [link, setLink] = useState("Home");
    const navigate = useNavigate(); 

    const handleNavigation = (path: string, label: string) => {
        setLink(label);
        navigate(path);
    }

    // useEffect(() => {
    //   console.log('colorfy', colorfy);
    // }, [colorfy]);

    // useEffect(() => {
    //   console.log('link', link);
    // }, [link]);

    return (
        <div className={`mt-1 header ${colorfy ? "button-colorfy" : ""}`}>
            <div className='d-flex'>
                 <button onClick={() => handleNavigation("/", "Home")} className={`${link === "Home" ? "active" : "button"}`}>Home </button>
                {link === "Home" ? <FontAwesomeIcon icon={faCircle}  style={{ fontSize: '10px', padding: "6px 0 0 5px" }}/> : ""}
            </div>
            <div className='d-flex'>
                 <button onClick={() => handleNavigation("/me", "Me")} className={`${link === "Me" ? "active" : "button"}`}>Me </button>
                {link === "Me" ? <FontAwesomeIcon icon={faCircle}  style={{ fontSize: '10px', padding: "6px 0 0 5px" }}/> : ""}
            </div>
            <div className='d-flex'>
                 <button onClick={() => handleNavigation("/skills", "Skills")} className={`${link === "Skills" ? "active" : "button"}`}>Skills </button>
                {link === "Skills" ? <FontAwesomeIcon icon={faCircle}  style={{ fontSize: '10px', padding: "6px 0 0 5px" }}/> : ""}
            </div>
            <div className='d-flex'>
                 <button onClick={() => handleNavigation("/contact", "Contact")} className={`${link === "Contact" ? "active" : "button"}`}>Contact </button>
                {link === "Contact" ? <FontAwesomeIcon icon={faCircle}  style={{ fontSize: '10px', padding: "6px 0 0 5px" }}/> : ""}
            </div>
        </div>
    );
};

export default Header
