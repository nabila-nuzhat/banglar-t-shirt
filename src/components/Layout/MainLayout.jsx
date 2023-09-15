import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* for common layout over whole website */}
            
            <Header></Header>
            
            {/* The pages and routes that will change is under Outlet */}
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;