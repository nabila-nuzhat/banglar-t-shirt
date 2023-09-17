import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
             {/* for common layout over whole website */}
               {/* The pages and routes that will change is under Outlet */}
        </div>
    );
};

export default MainLayout;