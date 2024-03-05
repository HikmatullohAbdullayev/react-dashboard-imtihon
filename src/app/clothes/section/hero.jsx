// import Input from '@/components/Input';

import Filter from "@/components/Filter";
import ProductAll from "@/components/ProductAll";
import React from "react";

function Hero(props) {
  return (
    <section className="max-w-[1390px] mx-auto container">
      <h1>Clothes</h1>

      <div className="flex justify-between items-start mt-18">
        
    <Filter  url={"clothes"} />
        <ProductAll url={"clothes"} />
      </div>
    </section>
  );
}

export default Hero;