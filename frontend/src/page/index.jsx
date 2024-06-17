import React from 'react';
import './index.css';
import Card from "../component/Card.jsx";
import styled from 'styled-components';
import FastFoodProducts from "../component/Product.jsx";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
margin-top: 24px;


  @media (max-width: 768px) {
    justify-content: space-around;

  }
`;

export default function Main() {
    return (
        <div className='main-container'>

            <div className='home' >
                <div className='logo' />
                <span className='hey-como-estas'>
        Hey
        <br />
        Como estas ?
      </span>

                <FlexContainer>
                    <Card bgColor="#E41C2A" image="https://mltwiersgrjj.i.optimole.com/UjSS7Fo-v4QCmOG4/w:auto/h:auto/q:90/https://menumcdo.com/wp-content/uploads/2021/05/Menu-20NUGGETS.png"    text={"coucou"} />
                    <Card
                        image="https://mltwiersgrjj.i.optimole.com/UjSS7Fo-v4QCmOG4/w:auto/h:auto/q:90/https://menumcdo.com/wp-content/uploads/2021/05/Menu-20NUGGETS.png"
                        text="Nom du produit 1"
                        link="https://example.com/product1"
                        bgColor="#f8f9fa"
                    />
                    <Card
                        image="https://mltwiersgrjj.i.optimole.com/UjSS7Fo-v4QCmOG4/w:auto/h:auto/q:90/https://menumcdo.com/wp-content/uploads/2021/05/Menu-20NUGGETS.png"
                        text="Nom du produit 2"
                        link="https://example.com/product2"
                        bgColor="#f8f9fa"
                    />
                    <Card
                        image="https://mltwiersgrjj.i.optimole.com/UjSS7Fo-v4QCmOG4/w:auto/h:auto/q:90/https://menumcdo.com/wp-content/uploads/2021/05/Menu-20NUGGETS.png"
                        text="Nom du produit 2"
                        link="https://example.com/product2"
                        bgColor="#f8f9fa"
                    />
                </FlexContainer>

                <span className='populaire'>Populaire</span>

                <FlexContainer>
                    <FastFoodProducts />
                </FlexContainer>
            </div>

        </div>
    );
}

