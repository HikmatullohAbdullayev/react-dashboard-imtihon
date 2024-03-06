"use client";
import { useEffect, useState } from "react";
import { request } from "@/config/request";
import { data } from "autoprefixer";
import ClearIcon from "../assets/icon/ClearIcon";

function Filter({ url }) {
  const [dataa, setData] = useState([]);
  const size = [
    { id: "1", size: "XXS" },
    { id: "2", size: "XS" },
    { id: "3", size: "S" },
    { id: "4", size: "M" },
    { id: "5", size: "L" },
    { id: "6", size: "XL" },
    { id: "7", size: "23" },
    { id: "8", size: "24" },
    { id: "9", size: "25" },
    { id: "10", size: "26" },
    { id: "11", size: "27" },
    { id: "12", size: "28" },
    { id: "13", size: "29" },
    { id: "14", size: "30" },
    { id: "15", size: "31" },
    { id: "16", size: "32" },
  ];
  const color = [
    { id: "1", color: "Beige", code: "#F3ECDB" },
    { id: "2", color: "Blue", code: "#465BA3" },
    { id: "3", color: "Black", code: "#000000" },
    { id: "4", color: "Orange", code: "#F07B4E" },
    { id: "5", color: "Green", code: "#41854D" },
    { id: "6", color: "Brown", code: "#665147" },
    { id: "7", color: "Purple", code: "#893D88" },
    { id: "8", color: "Gold", code: "#F3B121FF" },
    { id: "9", color: "Taupe", code: "#CAC1B8" },
    { id: "10", color: "White", code: "#FFFFFF" },
    { id: "11", color: "Pink", code: "#F2A1B1" },
    { id: "12", color: "Red", code: "#D23C47" },
  ];
  const category = [
    { id: 1, category: "All" },
    { id: 2, category: "Dresses" },
    { id: 3, category: "Denim" },
    { id: 4, category: "Jeans" },
    { id: 5, category: "Jumpsuits" },
    { id: 6, category: "Tops" },
    { id: 7, category: "Jackets and coats" },
    { id: 8, category: "Pants" },
    { id: 9, category: "Shorts" },
    { id: 10, category: "Skirts" },
    { id: 11, category: "Loungerie & underwear" },
    { id: 12, category: "Leather" },
    { id: 13, category: "Sweaters & knits" },
  ];

  return (
    <div className="w-[300px] px-14 table1005:w-full table1005:flex table1005:items-start mobile530:flex-col">
      <div className="  border-[#686868] w-full mt-[64px]  ">
        <div className="border-b-2 py-15 border-[#686868] w-full">
          <p className="block font-semibold text-[20px]  ">CATEGORY</p>
        </div>
        <ul className="mt-32 flex flex-col justify-start gap-16">
          {category.map((item) => (
            <li
              key={item.id}
              className="flex items-start w-full  text-[#686868] cursor-pointer hover:text-primary"
            >
              <p className="font-semibold text-16 ">{item.category}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className=" table1005:w-full table1005:flex-col table1005:items-start table1005:gap-20 ">
        <div className="flex flex-col items-start  max-w-[300px] mt-[64px] mx-auto">
          <div className="flex justify-between border-b-2 py-15 border-[#686868] w-full ">
            <p className="block font-semibold text-[20px]  "> SIZE</p>
            <p className="flex items-center gap-10 px-10 cursor-pointer font-semibold text-[#686868] text-[14px]">
              CLEAR{" "}
              <span>
                <ClearIcon />
              </span>
            </p>
          </div>
          <ul className="grid grid-cols-4 gap-16 mt-32 ">
            {size.map((item) => (
              <li key={item.id} className=" ">
                <p className="border rounded-2 py-[7px] px-[13px] cursor-pointer hover:bg-primary hover:text-white">
                  {item.size}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start mt-[64px] max-w-[300px] mx-auto">
          <div className="flex justify-between border-b-2 py-15 border-[#686868] w-full">
            <p className="block font-semibold text-[20px]  "> COLOR</p>
            <p className="flex items-center gap-10 px-10 cursor-pointer font-semibold text-[#686868] text-[14px]">
              CLEAR{" "}
              <span>
                <ClearIcon />
              </span>
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-8 mt-32 ">
            {color.map((item) => (
              <li
                key={item.id}
                className=" flex items-center gap-4 cursor-pointer 
             "
              >
                <span
                  className={`p-15 block  border rounded-2  bg-[${item.code}] hover:border-primary hover:border`}
                ></span>
                <p className=" text-[14px] ">{item.color}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
