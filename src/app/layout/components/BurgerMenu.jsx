"use client"
import React from 'react';
import Nav from "../components/Nav"
import ButtonNav from "../components/BurgerMenu"

function BurgerMenu(props) {
    return (
        <div>
            <Nav/>
            <ButtonNav/>
        </div>
    );
}

export default BurgerMenu;