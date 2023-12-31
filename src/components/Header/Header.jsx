import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/order-review">Order Review</Link>
            <Link to="/grandpa">Grandpa</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

        </nav>
    );
};

export default Header;