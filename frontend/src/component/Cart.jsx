import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from '../axios.js';



const CartContainer = styled.div`
  background-color: #FBFBF9;
  padding: 20px;
    width: 30%;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const TotalButton = styled.button`
  background-color: #F7CC5C;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

const Total = styled.p`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 20px;
`;

const CartComponent = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);


    const getCart = async () => {
        try {
            const response = await axios.get('/api/cart');
            if (response.data.message) {
                console.log(response.data.message);
                // Handle the case where no cart was found for the user
                // For example, you can set the cart to an empty array
                setCart([]);
            } else {
                setCart(response.data.cart);
            }
        } catch (error) {
            console.error(error);
        }
    };

const getCartTotal =  async () => {
    try {
        const response = await axios.get('/api/cart/totals');
        if (response.data.message) {
            console.log(response.data.message);
            // Handle the case where no cart was found for the user
            // For example, you can set the cart total to 0
            setCartTotal(0);
        } else if (response.data && typeof response.data.total === 'number') {
            setCartTotal(response.data.total/100);
        } else {
            console.error('Unexpected response data structure:', response.data);
        }
    } catch (error) {
        console.error(error);
    }
};

    const removeFromCart = async (productId) => {
        try {
            const response = await axios.delete(`/api/cart/remove/${productId}`);
            console.log('Product removed from cart:', response.data.message);

            getCart();
            getCartTotal();
        } catch (error) {
            console.error('Error removing product from cart:', error.response ? error.response.data : error.message);
        }
    };






    useEffect(() => {
        getCart();
        getCartTotal();
    }, []);

    return (
        <CartContainer>
            <h2>Ma Commande </h2>
            {cart && cart.map((cartItem, index) => (
                <div className="card" key={index}>
                    <img src={cartItem.product.image} alt={cartItem.product.name} />
                    <p>{cartItem.product.name}</p>
                    <p>{cartItem.product.price_in_cents / 100}€</p>
                    <button>+</button>
                    <button onClick={() => removeFromCart(cartItem.product.id)}>-</button>
                </div>
            ))}

            <Total>Nombres de produits: {cart.length}</Total>
            <Total>Total: {cartTotal}</Total>
            <TotalButton>Checkout</TotalButton>
        </CartContainer>
    );
}

export default CartComponent;
