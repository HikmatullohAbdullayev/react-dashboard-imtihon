"use client";
import React from "react";
import Nav from "./components/Nav.jsx";
import ButtonsNav from "./components/ButtonsNav.jsx";
import Logo from "../../assets/icon/Logo.jsx";
// import BurgerMenu from "./components/BurgerMenu"
import Link from "next/link";
import { useState } from "react";

function Header(props) {

  const [openMenu, setOpenMenu] = useState(true)
 const handeMenu = () =>{
  setOpenMenu(!openMenu)
  console.log(openMenu);
 }
  return (
    <>
      <header className=" w-full bg-#F5F5F5 table945:hidden ">
        <div className="flex justify-between   items-center container px-20 mx-auto max-w-[1169px] my-20 ">
          <nav className=" table945:hidden">
          <Nav />
          </nav>
          <span className="py-[15px] cursor-pointer  ">
            <Link href="/">
              <Logo />
            </Link>
          </span>
          <div className="table945:hidden">
          <ButtonsNav />
          </div>
          
             
           
        </div>
      </header>
      <header className=" hidden table945:block w-screen bg-#F5F5F5  ">
        <div className="flex justify-between w-full z-0   items-center container px-20 mx-auto max-w-[1169px] my-20 ">
          
          <span className="py-[15px] cursor-pointer mx-auto ">
            <Link href="/">
              <Logo />
            </Link>
          </span> 
          <div className={` py-20   bg-white table945:flex flex-col  z-10 justify-between items-center gap-20 w-full   table945:absolute top-0 left-0  ${openMenu ? "table945:mt-[-900px]" : "table945:mt-0"} table945:transition-all duration-500 ease-in-out `}>
              <button onClick={handeMenu} className=" absolute right-0   p-20 m-20 bg-red-600 rounded-8 text-white ">X</button>
              <Nav/>
              <ButtonsNav/>
            </div>
          <button onClick={handeMenu} className="">Open</button>
        </div>
      </header>
    </>
  );
}

export default Header;
