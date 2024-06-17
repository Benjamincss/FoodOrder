import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from "../axios.js";

const LogoImage = styled.img`
    width: 200px;  // Change this to the desired width
    object-fit: cover;
`;

const goToDashboard = async () => {
    try {
        const response = await axios.get('/logout');

    } catch (error) {
        console.error('Error:', error);
    }
}

const Logo = () => {
    return (
        <div>
            <Link to="/dashboard">
                <LogoImage src="/logo.webp" alt="Logo" />
            </Link>

        </div>
    );
}

export default Logo;
