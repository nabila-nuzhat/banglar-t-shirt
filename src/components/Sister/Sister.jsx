import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Sister</h2>
            <p><small>money from grandpa: {money} </small></p>
        </div>
    );
};

export default Sister;