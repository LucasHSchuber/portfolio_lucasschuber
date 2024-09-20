// header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate(); // Use useNavigate hook

    const handleNavigation = (path: string) => {
        navigate(path);
    }

    return (
        <div className='mt-5 header'>
            <h6 onClick={() => handleNavigation("/")}>Home</h6>
            <h6 onClick={() => handleNavigation("/me")}>Me</h6>
            <h6 >Work</h6>
            <h6 >Contact</h6>
        </div>
    );
};

export default Header;
