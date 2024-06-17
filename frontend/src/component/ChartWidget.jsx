import React from 'react';
import styled from 'styled-components';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', orders: 400 },
    { name: 'Feb', orders: 300 },
    { name: 'Mar', orders: 200 },
    { name: 'Apr', orders: 278 },
    { name: 'May', orders: 189 },
    { name: 'Jun', orders: 239 },
];

const WidgetContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    padding: 20px;
`;

const Title = styled.h3`
    color: #8884d8;
    margin-bottom: 20px;
`;

const ChartWidget = () => {
    return (
        <WidgetContainer>
            <Title>Order Overview</Title>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data}>
                    <Area type="monotone" dataKey="orders" stroke="#8884d8" fill="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
        </WidgetContainer>
    );
};

export default ChartWidget;
