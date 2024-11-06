import React from 'react';
import { useState, useEffect } from "react";
import { getStoredCartList } from "../utilities/AddtoDB";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const [cartCount, setCartCount] = useState(0);  

    const calculateCartDetails = () => {
        const storedCartList = getStoredCartList(); 
        setCartCount(storedCartList.length); 
    };
    
    useEffect(() => {
        calculateCartDetails(); 
    }, []);
    

    // navbar bg based on the route
    const navbarStyle = {
        backgroundColor: location.pathname === '/' ? '#9538E2' : 'white',
        color: location.pathname === '/' ? 'white' : 'black', 
        marginTop: '2rem',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem'
    };

    return (
        <section className="w-11/12 mx-auto">
            <div style={navbarStyle} className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
                            <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                            <li><NavLink to={'/aboutus'}>About Us</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
                        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                        <li><NavLink to={'/aboutus'}>About Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <i className="mr-4 border-slate-200 text-1xl p-2 border rounded-full fa-solid fa-cart-shopping">
                    {cartCount}</i>
                    <i className="mr-4 border-slate-200 text-1xl p-2 border rounded-full fa-regular fa-heart"></i>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
