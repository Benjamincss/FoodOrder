import React, { useState, useEffect } from 'react';
import axios from '../axios.js';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #f4f4f4;
`;

const Half = styled.div`
    width: 45%;
    background-color: #fff;
    margin: 0 10px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
`;

const Order = styled.div`
    color: #666;
    font-size: 18px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    &:last-child {
        border-bottom: none;
    }
`;

const OrdersPage = () => {
    const [ordersInPreparation, setOrdersInPreparation] = useState([]);
    const [ordersReady, setOrdersReady] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get('api/order');
                const ordersInPreparation = res.data.filter(order => order.status === 'en cours de prepa');
                const ordersReady = res.data.filter(order => order.status === 'finis');

                setOrdersInPreparation(ordersInPreparation);
                setOrdersReady(ordersReady);
            } catch (err) {
                console.error(err);
            }
        };

        const intervalId = setInterval(fetchOrders, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container>
            <Half>
                <Title>Commandes en préparation</Title>
                {ordersInPreparation.map(order => (
                    <Order key={order.id}>Commande ID: {order.id}</Order>
                ))}
            </Half>

            <Half>
                <Title>Commandes prêtes</Title>
                {ordersReady.map(order => (
                    <Order key={order.id}>Commande ID: {order.id}</Order>
                ))}
            </Half>
        </Container>
    );
};

export default OrdersPage;
