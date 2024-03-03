"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Nav(props) {
  const router = useRouter();

  return (
      <ul className=" flex justify-between items-center gap-[61px] table1005:gap-[30px] table945:flex table945:flex-col  ">
        <li className=" py-[3px] font-semibold text-14  hover:text-primary">
          <Link href="/">Home</Link>
        </li>
        <li className=" py-[3px] font-semibold text-14  hover:text-primary">
          <Link href="/clothes">Clothes</Link>
        </li>
        <li className=" py-[3px] font-semibold text-14  hover:text-primary">
          <Link href="/shoes">Shoes</Link>
        </li>
        <li className=" py-[3px] font-semibold text-14  hover:text-primary">
          <Link href="/accessories">Accessories</Link>
        </li>
      </ul>
  );
}

export default Nav;
