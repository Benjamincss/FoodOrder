
import { useOrder } from '../context/OrderContext';
import ChoiceCard from './ChoiceCard';
import styled from "styled-components";
import React, { useState } from 'react';
import axios from '../axios.js';


const ChoiceContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 23px;
`;

const Title = styled.p`
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
`;
const Choice = () => {
    const { setOrderType , setOrderId} = useOrder();


    const handleSetOrderType = (type) => {
        setOrderType(type);
    };

    const [orderCount, setOrderCount] = useState(0);

    const createOrder = async (type) => {
        handleSetOrderType(type);
        try {
            const response = await axios.post('/api/orders', {
                orderType: type,
                status: 'en cours de prepa ',
                total_amount: 0,
                name: 'Commande ' + orderCount,

            });
            setOrderCount(orderCount + 1);
            setOrderId(response.data.id);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Title>Choisissez votre option</Title>
            <ChoiceContainer>
                <ChoiceCard
                    image="https://cdn-icons-png.freepik.com/512/5247/5247827.png"
                    text="À emporter"
                    onClick={() => createOrder('takeaway')}
                />
                <ChoiceCard
                    image="https://cdn-icons-png.flaticon.com/512/2819/2819194.png"
                    text="Manger sur place"
                    onClick={() => createOrder('onsite')}
                />
            </ChoiceContainer>
        </>
    );
}

export default Choice;
