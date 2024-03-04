import React, { useEffect, useState } from "react";
import { request } from "@/config/request.js";
import { BASE_URL } from "@/config/request.js";
import axios from "axios";
import "./img.css";
import Like2Icon from "@/assets/icon/Like2Icon";
import ShopIcon from "@/assets/icon/ShopIcon";
import VectorIcon from "@/assets/icon/VectorIcon";
import VectorRigthIcon from "@/assets/icon/VectorRigthIcon";

function Product(props) {

  const [dataa, setData] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        switch (page) {
          case 1:
            response = await request.get("/home?_start=0&_limit=12");
            break;
          case 2:
            response = await request.get("/home?_start=13&_limit=12");
            break;
          case 3:
            response = await request.get("/home?_start=25&_limit=12");
            break;
          default:
            response = await request.get("/home?_start=0&_limit=12");
            break;
        }

        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);
  console.log(dataa);

  return (
    <section id="portal"  className="   flex justify-between   items-center container px-20 mx-auto max-w-[1338px] pt-[120px] pb-[129px] ">
      <div className="w-full text-center ">
        <p className="max-w-[1099px] font-normal  mx-auto text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
          lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis
          diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae
          adipiscing id facilisis.
        </p>
        <div className="grid gap-40  relative  w-[100%]    bg-white rounded-6 mt-100   grid-cols-[repeat(auto-fill,minmax(280px,1fr))]  mx-auto">
          {dataa.map((item) => (
            <div
              className="   felx p-8 flex-col justify-between   mx-auto  overflow-hidden    hover:shadow-lg"
              key={item.id}
            >
              <div className=" card_box relative w-[270px] h-[300px] ">
                <img
                  className=" hover_img  w-full h-full object-cover hover:blur-lg "
                  src={item.img}
                  alt={item.name}
                />
                <div className=" hover_effect absolute left-0 top-0 w-full h-full   ">
                  <div className="  flex flex-col justify-center items-center gap-[13px]  absolute mx-auto w-full h-full  ">
                    <button className=" button_hover p-14 bg-white  block">
                      <Like2Icon />{" "}
                    </button>
                    <button className=" flex items-center gap-8 button_hover rounded-2  p-14  bg-white">
                      {" "}
                      <p className="font-bold text-[10px] ">ADD TO CART</p>{" "}
                      <ShopIcon />{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="my-[30px]">
                <h3 className="text-[20px] font-normal ">{item.name}</h3>
                <p className="text-[20px] font-normal ">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="paggination ">
          <ul className="flex justify-center items-center gap-10 "> 
            <li className=" border-b-2 hover:border-primary  ">
              <a href="#portal" onClick={()=>(setPage(1))} className="text-24 block py-[19px] px-32">1</a>
              </li>
              <li className=" border-b-2 hover:border-primary  ">
              <a href="#portal" onClick={()=>(setPage(2))} className="text-24 block py-[19px] px-32">2</a>
              </li>
              <li className=" border-b-2 hover:border-primary  ">
              <a href="#portal" onClick={()=>(setPage(3))} className="text-24 block py-[19px] px-32">3</a>
              </li>
          </ul>
        </div>
       <a href="#portal" className="fixed bottom-[80px] right-[52px] p-30 border rounded-8 -rotate-90 hover:bg-primary"> <VectorRigthIcon/></a>
      </div>
    </section>
  );
}

export default Product;
