

import Filter from "@/components/Filter";
import ProductAll from "@/components/ProductAll";
import React from "react";

function AccessoriesHero(props) {
  return (
    <section className="max-w-[1390px] mx-auto container">
      <h1>AccessoriesHero</h1>

      <div className="flex justify-between items-start mt-18">
        
    <Filter  url={"shoes"} />
        <ProductAll url={"accessories"} />
      </div>
    </section>
  );
}

export default AccessoriesHero;
