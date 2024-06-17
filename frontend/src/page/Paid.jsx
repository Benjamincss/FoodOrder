import React from 'react';
import styled from 'styled-components';

const PaymentSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Item = styled.p`
  font-size: 18px;
  color: #666;
`;

const Total = styled.p`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

const PaymentSummary = () => {
  return (
    <PaymentSummaryContainer>
      <Title>Récapitulatif de paiement</Title>
      <Item>Article 1: 10€</Item>
      <Item>Article 2: 20€</Item>
      <Total>Total: 30€</Total>
    </PaymentSummaryContainer>
  );
};

export default PaymentSummary;
