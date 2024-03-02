"use client";
import React from "react";
import Nav from "./components/Nav.jsx";
import ButtonsNav from "./components/ButtonsNav.jsx";
import Logo from "../../assets/icon/Logo.jsx";

function Header(props) {
  return (
    <>
      <header className="py-5 w-screen bg-primary">
        <div className="  my-[20px] py-2  w-screen bg-white">
          <div className="flex container mx-auto w-[1440px] ">
            <nav> nav</nav>
            <Nav />
            <Logo/>
            <input type="text" name="" id="" />
            <ButtonsNav />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
