"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useRouter } from "next/navigation";

function Nav(props) {
  const pathName = usePathname();

  return (
    <ul className=" flex justify-between items-center gap-[61px] table1005:gap-[30px] table945:flex table945:flex-col  ">
      <li className=" py-[3px] font-semibold text-14  hover:text-primary">
        <Link to="/" className={`${pathName === "/" ? "active" : ""}`}>
          Home
        </Link>
      </li>
      <li className=" py-[3px] font-semibold text-14  hover:text-primary">
        <Link
          to="/clothes"
          className={`${pathName === "/clothes" ? "active" : ""}`}
        >
          Clothes
        </Link>
      </li>
      <li className=" py-[3px] font-semibold text-14  hover:text-primary">
        <Link
           to="/shoes"
          className={`${pathName === "/shoes" ? "active" : ""}`}
        >
          Shoes
        </Link>
      </li>
      <li className=" py-[3px] font-semibold text-14  hover:text-primary">
        <Link
          to="/accessories"
          className={`${pathName === "/accessories" ? "active" : ""}`}
        >
          Accessories
        </Link>
      </li>
    </ul>
  );
}
//nmadur
export default Nav;
