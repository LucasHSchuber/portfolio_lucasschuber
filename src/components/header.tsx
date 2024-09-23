// header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


interface HeaderProps {
    colorfy: boolean; 
}

const Header: React.FC<HeaderProps> = ({ colorfy }) => {
    const navigate = useNavigate(); 

    const handleNavigation = (path: string) => {
        navigate(path);
    }

    useEffect(() => {
      console.log('colorfy', colorfy);
    }, [colorfy]);

    return (
        <div className={`mt-1 header ${colorfy ? "button-colorfy" : ""}`}>
            <button onClick={() => handleNavigation("/")}>Home</button>
            <button onClick={() => handleNavigation("/me")}>Me</button>
            {/* <button onClick={() => handleNavigation("/projects")}>Projects</button> */}
            <button onClick={() => handleNavigation("/skills")}>Skills</button>
            <button onClick={() => handleNavigation("/contact")}>Contact</button>
        </div>
    );
};

export default Header
