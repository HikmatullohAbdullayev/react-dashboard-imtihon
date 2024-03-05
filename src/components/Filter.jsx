"use client";
import { useEffect, useState } from "react";
import { request } from "@/config/request";
import { data } from "autoprefixer";

function Filter({ url }) {
  const [dataa, setData] = useState([]);
  const size = [
   {id:"1",  size: "XXS"},
   {id:"2",  size: "XS"},
   {id:"3",  size: "S"},
   {id:"4",  size: "M"},
   {id:"5",  size: "XL"},
   {id:"6",  size: "23"},
   {id:"7",  size: "24"},
   {id:"8",  size: "25"},
   {id:"9",  size: "26"},
   {id:"10", size:  "28"},
   {id:"11", size:  "29"},
   {id:"12", size:  "30"},
   {id:"13", size:  "31"},
   {id:"14", size:  "32"}
  ];
  const color = [
 {id:"1", color: "Beige" , code:"cc"},
 {id:"2", color: "Beige" , code:"cc"},
 {id:"3", color: "Beige" , code:"cc"},
 {id:"4", color: "Beige" , code:"cc"},
 {id:"5", color: "Beige" , code:"cc"},
 {id:"6", color: "Beige" , code:"cc"},
 {id:"7", color: "Beige" , code:"cc"},
 {id:"8", color: "Beige" , code:"cc"},
 {id:"9", color: "Beige" , code:"cc"},
 {id:"10", color: "Beige" , code:"cc"},
 {id:"11", color: "Beige" , code:"cc"},
 
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
    <div className="w-[300px]">
      <div className="flex items-start border w-full">
        <ul> 
            <p>CATEGORY</p>
          {category.map((item) => (
            <li key={item.id} className="flex items-start " >
              <p>{item.category}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start border w-full">
            <p className="block"> SIZE</p>
        <ul className="grid grid-cols-3 "> 
          {size.map((item) => (
            <li key={item.id}  className=" " >
               <p>{item.size}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start border w-full">
            <p className="block"> COLOR</p>
        <ul className="grid grid-cols-3 "> 
          {color.map((item) => (
            <li key={item.id} className=" " >
              <span className="p-20 border"></span>
              <p>{item.color}</p>
            </li>
          ))}
        </ul>
      </div>
     
    </div>
  );
}

export default Filter;
