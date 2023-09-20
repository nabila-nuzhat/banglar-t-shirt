import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // element declare: Module 56-4
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h4>Thanks for shopping!</h4>
        </div>
    }
    return (
        <div>
            {/* condtional css in className */}
            <h2 className= {cart.length === 1 ? 'lightblue': 'red'} >Cart order summary: {cart.length} </h2>

            <p className= {`bold bordered ${cart.length === 3 ? 'orange': 'cyan' }`} > something bold ! </p>

{/* from the module 56-4 */}
            {cart.length > 2 ? <span className='pink'>Want More!!</span> : <span>Let's Shop!</span>} 
            {message} 
            {
                cart.map(tshirt => <p key={tshirt._id}
                >{tshirt.name} <button 
                onClick={ () =>  handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }

            {
                cart.length == 2 && <p>Double Bonanza!!</p>
            }
            {
                cart.length === 3 || <h3>let's get 1 free for 3 !!</h3>
            }
        </div>
    );
};

export default Cart;

/** VERY IMPORTANT
 * CONDITIONAL RENDERING
 * 1. use  if else to set a varibale that will contain an element, components etc
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || : (if the condition is false then the next thing will be displayed)
 */

/**
 * CONDITIONAL CSS Class
 * 1. use ternary
 * 2. ternary inside template string ` `
 */