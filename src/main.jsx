import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// from React Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import MainLayout from './components/Layout/MainLayout.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';
import Grandpa from './components/Grandpa/Grandpa';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      { //root route: main Home page of the website
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
      },

      {
        path: 'order-review',
        element: <OrderReview></OrderReview>
      },

      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
  <RouterProvider router={router} />
  </React.StrictMode>,
)
