import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f1f2e;
  color: white;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>© 2024 Your Company</p>
        </FooterContainer>
    );
};

export default Footer;
