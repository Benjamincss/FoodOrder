import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "../axios.js";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
`;

const OrdersList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
`;

const OrderCard = styled.div`
    width: 80%;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }
`;

const OrderId = styled.p`
    font-size: 1.5em;
    color: #333;
    margin-bottom: 10px;
`;

const OrderDetails = styled.p`
    font-size: 1.2em;
    color: #555;
    margin-bottom: 10px;
`;

const Timer = styled.p`
    font-size: 1.2em;
    color: #E41C2A;
    margin-bottom: 20px;
`;

const Button = styled.button`
    background-color: #E41C2A;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    margin: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #E41C2A;
    }
`;

const Cook = () => {

    const localOrders = [

    ];

    const [orders, setOrders] = useState([]);



    const getpreparingOrders = async () => {
        try {
            const res = await axios.get('api/order');
            const orders = res.data.filter(order => order.status === 'en cours de prepa');
            setOrders(orders);
        } catch (err) {
            console.error(err);
        }

    }

    const handleMarkAsReady = async (orderId) => {
        try {
            // Update the status on the server
            await axios.put(`api/order/${orderId}`, { status: 'finis' });

            // Update the status in the local state and remove the order
            setOrders(prevOrders => prevOrders.map(order =>
                order.id === orderId ? { ...order, status: 'finis' } : order
            ));
            setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {

        getpreparingOrders();

        setOrders(localOrders);
    }, []);

    useEffect(() => {
        const timers = orders.map(order =>
            setInterval(() => {
                setOrders(prevOrders =>
                    prevOrders.map(o =>
                        o.id === order.id && o.status === 'preparing' && o.time > 0 ? { ...o, time: o.time - 1 } : o
                    )
                );
            }, 1000)
        );

        return () => {
            timers.forEach(timer => clearInterval(timer));
        };
    }, [orders]);



    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <Container>
            <Title>Commandes à préparer</Title>
            <OrdersList>
                {orders.map(order => (
                    <OrderCard key={order.id}>
                        <OrderId>Commande ID: {order.id}</OrderId>
                        <OrderDetails>{order.details}</OrderDetails>
                        <Timer>Temps restant: {formatTime(order.time)}</Timer>
                        {order.status !== 'ready' && (
                            <Button onClick={() => handleMarkAsReady(order.id)}>Marquer comme prête</Button>
                        )}
                    </OrderCard>
                ))}
            </OrdersList>
        </Container>
    );
};

export default Cook;
