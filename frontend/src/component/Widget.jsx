import React from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Widget = ({ children }) => {
    return <WidgetContainer>{children}</WidgetContainer>;
};

export default Widget;
