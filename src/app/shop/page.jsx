"use client";

import React from "react";
import { global } from "styled-jsx/css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Shop(props) {
  const router = useRouter();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const chekToken = localStorage.getItem("token");

    if (chekToken) {
      console.log("marhabo");
      const chekCart = localStorage.getItem("Cart");
      const parsedCart = chekCart ? JSON.parse(chekCart) : [];

      setCart([...parsedCart]);

      console.log(parsedCart);
    } else {
      router.push("/login");
    }
  }, []);

   return (
    <section className="max-w-[1390px] mx-auto container">
    <h2 className="p-[20px] text-[20px] font-bold">My Cart</h2>
    <div className=" text-center mx-auto w-full">
        
        <div  className="grid gap-20 w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  mx-auto">
            {cart.map((item) => (
                <div
                className="   felx p-8 flex-col justify-between w-full  mx-auto  overflow-hidden    hover:shadow-lg"
                key={item.id}
            >
                
                <div className=" card_box relative w-[270px] h-[300px] ">
                <img
                    className="  w-full h-full object-cover "
                    src={item.img}
                    alt={item.name}
                />
                </div>

                <div className="my-[30px]">
                <h3 className="text-[20px] font-normal ">{item.name}</h3>
                <p className="text-[20px] font-normal ">${item.price}</p>
                <p className="text-[20px] font-normal ">{item.category}</p>
                </div>
                <div className="flex flex-col gap-8">
                <div className="flex justify-around items-center  ">
                <button className="px-16 py-10 rounded-6 border border-primary hover:bg-primary hover:text-white"> -</button>
                <button className="px-16 py-10 rounded-6 border border-primary hover:bg-primary hover:text-white">+</button>
                </div>
                <button className="px-16 py-10 rounded-6 border border-primary hover:bg-primary hover:text-white">Remove Cart</button>
                </div>
            </div>
            ))}
        </div>
    </div>
 </section>
  );
}

export default Shop;
