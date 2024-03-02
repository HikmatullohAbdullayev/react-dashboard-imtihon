"use client"
import React from 'react';
import LoginIcon from "../../../assets/icon/LoginIcon"
import CartIcon from "../../../assets/icon/CartIcon"
import LikeIcon from "../../../assets/icon/LikeIcon"

function ButtonsNav(props) {
    return (
        <div>
            <a href="/login"><span><LoginIcon/></span></a>
            <a href="/login"><span><CartIcon/></span></a>
            <a href="/login"><span><LikeIcon/></span></a>
            
        </div>
    );
}

export default ButtonsNav;