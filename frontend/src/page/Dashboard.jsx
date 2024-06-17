import React from 'react';
import styled from 'styled-components';
import Sidebar from '../component/Sidebar';
import MainContent from '../component/MainContent';
import Header from '../component/Header';

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Header />
                <MainContent />
            </div>
        </DashboardContainer>
    );
};

export default Dashboard;
