import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  max-width: 181.41px;
  min-height: 194px;
  max-height: 194px;
  background: ${props => props.bgColor || '#F9F9F8'};
  color: ${props => props.bgColor ? 'white' : 'black'};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 22px;

  @media (max-width: 768px) {
    max-width: calc(181.41px / 1.2);
    min-height: calc(194px / 1.2);
    max-height: calc(194px / 1.2);
  }
`;


const CardImage = styled.img`
  width: 100%;
  height: 194px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: calc(194px / 1.2);
  }
`;

const CardText = styled.p`
    font-size: 1.2em;
    color: ${props => props.bgColor ? 'white' : 'black'};

    margin-top: 10px;

  @media (max-width: 768px) {
    font-size: calc(1em / 1.2);
  }
`;

const CardLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

function Card({ image, text, link ,bgColor }) {
    return (
        <CardContainer bgColor={bgColor}>
            <CardImage src={image} alt={text} />
            <CardLink href={link}>
                <CardText>{text}</CardText>
            </CardLink>
        </CardContainer>
    );
}

export default Card;
