"use client";
import React from "react";
import LoginIcon from "../../../assets/icon/LoginIcon";
import CartIcon from "../../../assets/icon/CartIcon";
import LikeIcon from "../../../assets/icon/LikeIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ButtonsNav(props) {
  const pathName = usePathname();
  return (
    <>
      <div className="flex justify-between items-center gap-[30px] table945:flex table945:flex-col ">
        
        <Link href="accaunt">
          <span
            className={`w-[16px] h-[16px]  hover:fill-primary cursor-pointer ${
              pathName === "/accaunt" ? "active" : ""
            }  `}
          >
            <LoginIcon />
          </span>
        </Link>
        <Link href="shop">
          <span
            className={`w-[16px] h-[16px]  hover:fill-primary cursor-pointer ${
              pathName === "/shop" ? "active" : ""
            }  `}
          >
            <CartIcon />
          </span>
        </Link>
        <Link href="like">
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
