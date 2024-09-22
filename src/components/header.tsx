// header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate(); 

    const handleNavigation = (path: string) => {
        navigate(path);
    }

    return (
        <div className='mt-1 header '>
            <button onClick={() => handleNavigation("/")}>Home</button>
            <button onClick={() => handleNavigation("/me")}>Me</button>
            <button onClick={() => handleNavigation("/projects")}>Projects</button>
            <button onClick={() => handleNavigation("/skills")}>Skills</button>
            <button onClick={() => handleNavigation("/contact")}>Contact</button>
        </div>
    );
};

export default Header
