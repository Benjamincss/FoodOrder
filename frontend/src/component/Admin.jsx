import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from '../axios.js';


const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FileInputContainer = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.h2`
  font-size: 18px;
  color: #333;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #333;
`;


const ProductList = styled.div`
  margin-top: 20px;
`;

const ProductCard = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);

    const getProduct = async () => {
        try {
            const response = await axios.get('/api/product');
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect( () => {
        getProduct();
    }, []);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <Container>
            <ProductGridContainer>
                {products && products.map((productItem) => (
                    <ProductContainer key={productItem.id} onClick={() => addToCart(productItem)}>
                        <ProductImage src={productItem.image} alt={productItem.name} />
                        <ProductName>{productItem.name}</ProductName>
                        <ProductPrice>{productItem.price_in_cents / 100}€</ProductPrice>
                    </ProductContainer>
                ))}
            </ProductGridContainer>
        </Container>
    );
}

export default AdminDashboard;
