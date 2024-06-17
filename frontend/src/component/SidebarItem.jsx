import React from 'react';
import styled from 'styled-components';
import { FaHome, FaChartBar, FaCog, FaQuestionCircle } from 'react-icons/fa';

const Item = styled.div`
  padding: 20px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #3b4b55;
  }
`;

const icons = {
    home: <FaHome />,
    analytics: <FaChartBar />,
    settings: <FaCog />,
    help: <FaQuestionCircle />,
};

const SidebarItem = ({ icon }) => {
    return <Item>{icons[icon]}</Item>;
};

export default SidebarItem;
