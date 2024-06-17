import React, { useState, useEffect } from "react";
import axios from "../axios.js";
import styled from 'styled-components';
import { useOrder } from '../context/OrderContext';

// Styled components for the menu
const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two columns layout
  grid-gap: 10px; // Spacing between grid items
  justify-content: center;
  padding: 20px;
`;

const MenuItem = styled.button`
    background-color: ${props => props.active ? '#D9232D' : '#c9c9c9'};
    color: ${props => props.active ? 'white' : 'black'};
  border: none;
  border-radius: 10px;
  padding: 60px;
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
  width: calc(100% - 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
      background-color: ${props => props.active ? '#BF1D24' : '#f0f0f0'};
  }
`;



const Menu = () => {
    const [menu, setMenu] = useState([]);
    const { setOrderType } = useOrder();
    console.log("coucou")
    console.log(menu)
    console.log(useOrder)
    console.log(setOrderType);

    useEffect(() => {
        axios.get('/api/order')
            .then(response => {
                setMenu(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <MenuContainer>

            <MenuItem active>Combo Meal</MenuItem>
            <MenuItem>Burgers & Sandwiches</MenuItem>
            <MenuItem>Happy Meal</MenuItem>
            <MenuItem>Beverages</MenuItem>
            <MenuItem>Chicken</MenuItem>
            <MenuItem>Snacks & Sides</MenuItem>
        </MenuContainer>
    );
};

export default Menu;
