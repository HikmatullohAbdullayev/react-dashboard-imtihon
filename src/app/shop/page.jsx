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
    <div>
      Cart
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
