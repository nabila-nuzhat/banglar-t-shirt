import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h2>Friend</h2>
            {ring && <h4>Ring: Diamond</h4> }
        </div>
    );
};

export default Friend;