import React from 'react';
import Widget from './Widget';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const StatisticsWidget = () => {
    return (
        <Widget>
            <h3>Lorem Ipsum</h3>
            <div>
                <FaArrowUp color="green" /> 1974
            </div>
            <div>
                <FaArrowDown color="red" /> 287
            </div>
        </Widget>
    );
};

export default StatisticsWidget;
