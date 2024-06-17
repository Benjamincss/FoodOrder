import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Dashboard</h1>
            <SearchInput type="text" placeholder="Search..." />
        </HeaderContainer>
    );
};

export default Header;
