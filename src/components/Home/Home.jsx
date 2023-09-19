import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import '../Home/Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState ([]);

    const handleAddToCart = tshirt =>{
        // console.log(tshirt);
        const exists = cart.find(ts =>ts._id === tshirt._id); // if want to set cannot purchase more than 1 tshirt

        if(exists){
            // alert/toast
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
        // const newCart = [...cart, tshirt];
        // setCart(newCart);
    }

    const handleRemoveFromCart =  id =>{
        // console.log(id);

        const remaining =  cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
            {
                tshirts.map(tshirt => <TShirt
                key={tshirt._id}
                tshirt ={tshirt} handleAddToCart={handleAddToCart}></TShirt>)
            }
            </div>

            <div className="cart-container">
                <Cart cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
            
        </div>
    );
};

export default Home;