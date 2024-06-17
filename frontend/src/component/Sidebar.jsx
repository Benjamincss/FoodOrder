import React from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const SidebarContainer = styled.div`
  width: 80px;
  background-color: #4b5d67;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  height: 100vh;
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarItem icon="home" />
            <SidebarItem icon="analytics" />
            <SidebarItem icon="settings" />
            <SidebarItem icon="help" />
        </SidebarContainer>
    );
};

export default Sidebar;
