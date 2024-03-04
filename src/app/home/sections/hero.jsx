import React from "react";
import Image from "next/image";
import img from "../../../../public/img.png";
import banner from "../../../../public/LogoBanner.png";
import VectorIcon from "@/assets/icon/VectorIcon";
import "./img.css";

function Hero(props) {
  return (
    <div className=" bg-primary ">
      <div className=" bgimg   ">
        <div className="max-w-[500px] mx-auto table845:max-w-[300px] mobil670:max-w-[200px]">
          <Image
            className="mx-auto object-cover w-full  "
            src={img}
            quality={100}
            placeholder="blur"
            alt="img"
          />
        </div>
      </div>
      <div className="mx-auto text-center ">
        <p>Explore our collection</p>
        <span className=" inline-block p-20"><VectorIcon/></span>
      </div>
    </div>
  );
}

export default Hero;
