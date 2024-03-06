"use client";
import React from "react";
import LoginIcon from "../../../assets/icon/LoginIcon";
import CartIcon from "../../../assets/icon/CartIcon";
import LikeIcon from "../../../assets/icon/LikeIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchIcon from "../../../assets/icon/SearchIcon";

function ButtonsNav(props) {
  const pathName = usePathname();
  return (
    <>
      <div className="flex justify-between items-center gap-[30px] table945:flex table945:flex-col ">
        <div className="flex items-center gap-8 w-[285px] px-2 py-2  table1005:w-[230px] table945:hidden">
          <input
            className="w-full shadow-none border rounded-lg border-b-black outline-none p-1.5  focus:outline-none focus:border-b-primary focus:border-b-2  inline-block  "
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <label id="search" htmlFor="search">
            <span className=" w-[16px] h-[16px]  hover:fill-primary cursor-pointer">
              <SearchIcon />
            </span>
          </label>
        </div>
        <Link href="/accaunt">
          <span
            className={`w-[16px] h-[16px]  hover:fill-primary cursor-pointer ${
              pathName === "/accaunt" ? "active" : ""
            }  `}
          >
            <LoginIcon />
          </span>
        </Link>
        <Link href="/shop">
          <span
            className={`w-[16px] h-[16px]  hover:fill-primary cursor-pointer ${
              pathName === "/shop" ? "active" : ""
            }  `}
          >
            <CartIcon />
          </span>
        </Link>
        <Link href="/like">
          <span
            className={`w-[16px] h-[16px]  hover:fill-primary cursor-pointer ${
              pathName === "/like" ? "active" : ""
            }  `}
          >
            <LikeIcon />
          </span>
        </Link>
      </div>
    </>
  );
}

export default ButtonsNav;
