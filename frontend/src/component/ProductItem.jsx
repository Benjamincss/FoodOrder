import React, {useEffect, useState} from 'react';
import { ProductContainer, ProductImage, ProductName, ProductPrice } from './Product.jsx';
import axios from "../axios.js";

const ProductItem = ({ product, onProductClick , onDescriptionClick  }) => {

    let options;
    let optionsFetched = false;
    const fetchOptions = async () => {
        options = await getproductOptions(product.id);
        optionsFetched = true
    }

    const getproductOptions = async () => {
        try {
            const { data } = await axios.get(`/api/product/${product.id}/options`);
            return data;
        } catch (error) {
            console.error(error);
        }
    };



    const handleClick = async () => {
        if  (!product.is_available) {
            return;
        }

        if(!optionsFetched) {
            await fetchOptions();
        }

        if(options.length === 0) {
            return;
        }



        onProductClick(product , options)
    }
    return (
        <ProductContainer key={product.id} onClick={handleClick}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>
                {product.is_available ? product.name : 'Non disponible'}
            </ProductName>
            <ProductPrice>{product.price_in_cents / 100}€</ProductPrice>
            <p onClick={() => onDescriptionClick(product)}>Description</p>
        </ProductContainer>
    );
};

export default ProductItem;
