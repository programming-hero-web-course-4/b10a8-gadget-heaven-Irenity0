import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Statistics from './components/Statistics';
import Cart from './components/Cart';
import WishList from './components/WishList';
import AboutUs from './components/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            index: true, 
            element: <Cart></Cart>,
            loader: () => fetch('/data.json')
          },
          {
            path: 'cart',
            element: <Cart></Cart>,
            loader: () => fetch('/data.json')
          },
          {
            path: 'wishlist',
            element: <WishList></WishList>,
            loader: () => fetch('/data.json')
          }
        ]
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:productId',
        element: <ProductDetail />
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
