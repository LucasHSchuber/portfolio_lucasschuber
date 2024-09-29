// header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';



interface HeaderProps {
    colorfy: boolean; 
}

const Header: React.FC<HeaderProps> = ({ colorfy }) => {
    //define states
    const [link, setLink] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

    const navigate = useNavigate(); 

    const isMobile = () => {
        return window.matchMedia('(max-width: 768px)').matches;
      }

    const handleNavigation = (path: string, label: string) => {
        setLink(label);
        navigate(path);
        // Close menu only if it's on mobile devices
    if (isMobile()) {
        setMenuOpen(false);
      }
    }
    

    return (
        <div className={`mt-1 header ${colorfy ? "button-colorfy" : ""}`}>
          {/* Hamburger icon for mobile */}
          <div className={`hamburger-menu ${menuOpen ? "white-hamburger-menu" : "black-hamburger-menu"}`} onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
    
          {/* Navigation Links */}
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <div className='d-flex'>
              <button onClick={() => handleNavigation("/", "Home")} className={`${link === "Home" ? "active" : "button"}`}>Home</button>
              {link === "Home" && <FontAwesomeIcon icon={faCircle} className='link-round-icon'/>}
            </div>
    
            <div className='d-flex'>
              <button onClick={() => handleNavigation("/me", "Me")} className={`${link === "Me" ? "active" : "button"}`}>Me</button>
              {link === "Me" && <FontAwesomeIcon icon={faCircle} className='link-round-icon' />}
            </div>
    
            <div className='d-flex'>
              <button onClick={() => handleNavigation("/skills", "Skills")} className={`${link === "Skills" ? "active" : "button"}`}>Skills</button>
              {link === "Skills" && <FontAwesomeIcon icon={faCircle} className='link-round-icon' />}
            </div>
    
            <div className='d-flex'>
              <button onClick={() => handleNavigation("/contact", "Contact")} className={`${link === "Contact" ? "active" : "button"}`}>Contact</button>
              {link === "Contact" && <FontAwesomeIcon icon={faCircle} className='link-round-icon'/>}
            </div>
          </div>
        </div>
      );
}
export default Header
