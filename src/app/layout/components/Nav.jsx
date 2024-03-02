"use client"
import NavLink from '../../../components/NavLink.jsx';
import React from 'react';

function Nav(props) {
    return (
        <nav>
            
         <a href="/">home</a>
         <a href="/clothes">Clothes</a>
         <a href="/shoes">shoes</a>
         <a href="/accessories">accessories</a>
        </nav>
    );
}

export default Nav;