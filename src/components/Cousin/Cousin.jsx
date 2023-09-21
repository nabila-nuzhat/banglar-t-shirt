import React from 'react';
import Friend from '../Friend/Friend';

// hasFriend: a conditional prop
const Cousin = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small> {children} </small></p>
{/* Friend component inside Cousin compoenent will be visible where "hasfriend" conditional prop is added" */}
            { hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;