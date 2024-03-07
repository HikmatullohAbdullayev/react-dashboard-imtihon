"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

function Nav(props) {
  const pathName = usePathname();

  const handleNavigation = (href) => {
    // Server tomonidan yuklash uchun client tomonidan navigatsiyani boshlaymiz
    router.push(href);
  };

  return (
    <ul className=" flex justify-between items-center gap-[61px] table1005:gap-[30px] table945:flex table945:flex-col  ">
      <li className=" py-[3px] font-semibold text-14  hover:text-primary">
        <Link onClick={() => handleNavigation("/")}  className={`${pathName === "/" ? "active" : ""}`}>
          Home
        </Link>
      </li>
      <li className=" py-[3px] font-semibold text-14  hover:text-primary">
        <Link
        onClick={() => handleNavigation("/clothes")}
          className={`${pathName === "/clothes" ? "active" : ""}`}
        >
          Clothes
        </Link>
      </li>
      <li className=" py-[3px] font-semibold text-14  hover:text-primary">
        <Link
           href="/shoes"
          className={`${pathName === "/shoes" ? "active" : ""}`}
        >
          Shoes
        </Link>
      </li>
      <li className=" py-[3px] font-semibold text-14  hover:text-primary">
        <Link
          href="/accessories"
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
