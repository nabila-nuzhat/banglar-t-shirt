import React from 'react';
import '../TShirt/TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {name, price, picture} = tshirt;
    return (
        <div className='t-shirt'>
            <img src= {picture} alt="" />
            <h3>{name} </h3>
            <p>Price: ${price} </p>
            <button onClick={() => handleAddToCart(tshirt) }>Buy Now</button>
        </div>
    );
};

export default TShirt;