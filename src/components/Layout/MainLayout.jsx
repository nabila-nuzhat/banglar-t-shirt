import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
// React-hot-toast from https://react-hot-toast.com/docs
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
             {/* for common layout over whole website */}
               {/* The pages and routes that will change is under Outlet */}
               <Toaster />
        </div>
    );
};

export default MainLayout;