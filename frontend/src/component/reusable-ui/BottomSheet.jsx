import React from 'react';
import styled from 'styled-components';
import CustomPage from "../../page/CustomPage.jsx";

const SheetWrapper = styled.div`
  position: fixed;
  bottom: 0;
    z-index: 100;
  left: 0;
    height: 70%;
  right: 0;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(100%)'};
  transition: transform 0.3s ease-in-out;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: ${props => props.show ? 'block' : 'none'};
`;

const BottomSheet = ({ show, children, onClose }) => {
    return (
        <>
            <Backdrop show={show} onClick={onClose} />
            <SheetWrapper show={show}>
                {children}

            </SheetWrapper>
        </>
    );
};

export default BottomSheet;
