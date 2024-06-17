import React from 'react';
import styled from 'styled-components';
import StatisticsWidget from './StatisticsWidget';
import ChartWidget from './ChartWidget';
import AdminDashboard from "./Admin.jsx";

const MainContentContainer = styled.div`


  background-color: #f4f4f9;


`;

const MainContent = () => {
    return (
        <MainContentContainer>

            <AdminDashboard />



        </MainContentContainer>
    );
};

export default MainContent;
