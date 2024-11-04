import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Statistics from './components/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      { path: '/', element: <Products category="all" /> },
      { path: '/laptops', element: <Products category="laptops" /> },
      { path: '/phones', element: <Products category="phones" /> },
      { path: '/accessories', element: <Products category="accessories" /> },
      { path: '/smart-watches', element: <Products category="smart-watches" /> },
      { path: '/macbooks', element: <Products category="macbooks" /> },
      { path: '/iphones', element: <Products category="iphones" /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
