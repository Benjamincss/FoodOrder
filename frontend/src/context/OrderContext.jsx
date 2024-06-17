
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const [orderType, setOrderType] = useState(''); // 'takeaway' ou 'onsite'
    const [orderId, setOrderId] = useState(null);







    return (
        <OrderContext.Provider value={{ orderType, setOrderType }}>
            {children}
        </OrderContext.Provider>
    );
};
