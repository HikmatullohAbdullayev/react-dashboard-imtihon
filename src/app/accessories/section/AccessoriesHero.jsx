import Filter from "@/components/Filter";
import ProductAll from "@/components/ProductAll";
import React from "react";

function AccessoriesHero(props) {
  return (
    <section className="max-w-[1390px] mx-auto container">
      <h1 className="text-start font-extrabold text-[30px] pt-[88px]">
        Accessories
      </h1>

      <div className="flex justify-between items-start mt-18 table1005:flex table1005:flex-col">
        <Filter url={"shoes"} />
        <ProductAll url={"accessories"} />
      </div>
    </section>
  );
}

export default AccessoriesHero;
