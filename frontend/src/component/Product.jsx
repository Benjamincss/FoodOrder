import React, { useState, useEffect } from 'react';
import axios from '../axios.js';
import { useOrder } from "../context/OrderContext.jsx";
import BottomSheet from './reusable-ui/BottomSheet.jsx';
import styled from 'styled-components';
import CustomPage from "../page/CustomPage.jsx";
import ProductItem from "./ProductItem.jsx";


export const ProductContainer = styled.div`
  min-width: 181.41px;
  max-width: 181.41px;
  min-height: 194px;

  text-align: center;
    margin-top: 23px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    min-width: ${181.41 / 1.2}px;
    max-width: ${181.41 / 1.2}px;
    min-height: ${150 / 1.2}px;
    max-height: ${150 / 1.2}px;
  }
`;

export  const ProductImage = styled.img`
  width: 181px;
  height: 135px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: ${181 / 2}px;
    height: ${135 / 2}px;
  }
`;

export const ProductName = styled.h2`
  font-size: 1.2em;
  color: #333;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: ${1.2 / 1.5}em;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1em;
  color: #666;

  @media (max-width: 768px) {
    font-size: ${1 / 1.5}em;
  }
`;

export const ProductGridContainer = styled.div`
  display: grid;
    gap: 34px;
  grid-template-columns: repeat(3, 1fr);

  justify-items: center;

  @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
  }
`;






const FastFoodProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProductOptions, setSelectedProductOptions] = useState([]);
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [showDescriptionSheet, setShowDescriptionSheet] = useState(false);



    const OrderTypeDisplay = () => {
        const { orderType } = useOrder();

        return (
            <h1>{orderType}</h1>
        );
    };


    const openDescriptionSheet = product => {

        setSelectedProduct(product);
        setShowDescriptionSheet(true);

    };

    const closeDescriptionSheet = () => {
        setShowDescriptionSheet(false);
        closeBottomSheet();

    };


    const getProduct = async () => {
        try {
            const response = await axios.get('/api/product');
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };



    const addToCart = async (selectedProduct) => {
        try {
            const response = await axios.post(`/api/cart/add/${selectedProduct.id}`);
            console.log('Product added to cart:', response.data.message);


        } catch (error) {
            console.error('Error adding product to cart:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        getProduct();

    }, []);

    const handleProductClick = async (product, options) => {
        setSelectedProduct(product);
        setSelectedProductOptions(options);


        setShowBottomSheet( true);
    };

    const closeBottomSheet = () => {
        setShowBottomSheet(false);
    };

    return (
        <>
            <OrderTypeDisplay />
            <ProductGridContainer>
                {products.map(productItem => (
                    <ProductItem product={productItem} onDescriptionClick={openDescriptionSheet} onProductClick={handleProductClick}   />
                ))}
            </ProductGridContainer>





            <BottomSheet show={showBottomSheet} onClose={closeBottomSheet}>
                <CustomPage key={showBottomSheet} options={selectedProductOptions}></CustomPage>
            </BottomSheet>

            <BottomSheet show={showDescriptionSheet} onClose={closeDescriptionSheet}>
                <h1>{selectedProduct?.name}</h1>
                <p>{selectedProduct?.description}</p>
                <p>{selectedProduct?.id}</p>
            </BottomSheet>





        </>





    );
};

export default FastFoodProducts;
