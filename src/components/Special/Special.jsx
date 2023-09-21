import React, { useContext } from 'react';

const Special = ({ring}) => {
    const angti = useContext()
    return (
        <div>
            <h2>Special </h2>
            <p><small>Ring: {ring}</small></p>
        </div>
    );
};

export default Special;