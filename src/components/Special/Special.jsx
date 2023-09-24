import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    // module 56.6 Contsxt api
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>Special </h2>
            <p><small>Ring: {ring}</small></p>
        
        {/* angti using Context API */}
            <p><small>Ring: {angti}</small></p>
        </div>
    );
};

export default Special;