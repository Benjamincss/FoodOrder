import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Card = styled.div`
    background: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    width: 170px;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    color: #1a1a1a;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`;

const ChoiceCard = ({ image, text, onClick }) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        onClick();  // Call the onClick passed from parent (setOrderType)
        navigate('/order');  // Navigate programmatically to /order
    };

    return (
        <Card onClick={handleOnClick}>
            <Image src={image} alt={text} />
            {text}
        </Card>
    );
}

export default ChoiceCard;
