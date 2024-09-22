// header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate(); 

    const handleNavigation = (path: string) => {
        navigate(path);
    }

    return (
        <div className='mt-1 header d-flex '>
            <h6 onClick={() => handleNavigation("/")}>Home</h6>
            <h6 onClick={() => handleNavigation("/me")}>Me</h6>
            <h6 onClick={() => handleNavigation("/projects")}>Projects</h6>
            <h6 onClick={() => handleNavigation("/skills")}>Skills</h6>
            <h6 onClick={() => handleNavigation("/contact")}>Contact</h6>
        </div>
    );
};

export default Header
