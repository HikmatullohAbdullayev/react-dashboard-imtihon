"use client";
import React, { useEffect, useState } from "react";
import { request } from "@/config/request";
// import "./img.css";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Like2Icon from "@/assets/icon/Like2Icon";
import ShopIcon from "@/assets/icon/ShopIcon";
import VectorRigthIcon from "@/assets/icon/VectorRigthIcon";
import { useRouter } from "next/navigation";

function ProductAll({ url }) {
  const [dataa, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [token, setToken] = useState(null);

  const router = useRouter();

  useEffect(() => {
   

    const fetchData = async () => {
      try {
        let response;
        switch (page) {
          case 1:
            response = await request.get(`/home?_start=0&_limit=12`);
            break;
          case 2:
            response = await request.get(`/home?_start=13&_limit=12`);
            break;
          case 3:
            response = await request.get(`/home?_start=15&_limit=12`);
            break;
          default:
            response = await request.get(`/home?_start=0&_limit=12`);
            break;
        }

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  const chekToken = localStorage.getItem("token");
  setToken(chekToken);
  console.log(token);
  // useEffect(() => {
  // },[])

  console.log(dataa);

  const [allProductHome, setAllProductHome] = useState([]);

  const bosildiFavorite = (item) => {
    try {
      const tekshirish = allProductHome.some(
        (product) => product.id === item.id
      );

      if (token) {
        if (!tekshirish) {
          setAllProductHome([...allProductHome, item]);
          localStorage.setItem(
            "favorite",
            JSON.stringify([...allProductHome, item])
          );
          toast.success("Muvafaqiyatli qo'shildi. Favorite bo'limiga");
        } else {
          toast.error("Bu mahsulotdan bor. Favorite bo'limida");
        }
      } else {
        toast.error("Avval Login qilish kerak");

        router.push("/login");
      }
    } catch (error) {
      toast.error("Xatolik yuz berdi");
      console.log(error.message);
    }
  };

  const [allProductHome2, setAllProductHome2] = useState([]);

  const bosildiCart = (item) => {
    try {
      const tekshirish2 = allProductHome2.some(
        (product) => product.id === item.id
      );

      if (token) {
        if (!tekshirish2) {
          setAllProductHome2([...allProductHome2, item]);
          localStorage.setItem(
            "cart",
            JSON.stringify([...allProductHome2, item])
          );
          toast.success("Muvafaqiyatli qo'shildi. Cart bo'limiga");
        } else {
          toast.error("Bu mahsulotdan bor. Cart bo'limida");
        }
      } else {
        toast.error("Avval Login qiling");
        router.push("/login");
      }
    } catch (error) {
      toast.error("Xatolik yuz berdi");
      console.log(error.message);
    }
  };

  return (
    <section
      id="portal"
      className="   flex justify-between   items-center container px-20 mx-auto max-w-[1338px] pt-[120px] pb-[129px] "
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full text-center ">
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
                    <button
                      onClick={() => bosildiFavorite(item)}
                      className=" button_hover p-14 bg-white  block"
                    >
                      <Like2Icon />{" "}
                    </button>
                    <button
                      onClick={() => bosildiCart(item)}
                      className=" flex items-center gap-8 button_hover rounded-2  p-14  bg-white"
                    >
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

        <div className="paggination mt-[85px] max-w-full flex justify-between items-center">
          <div></div>
          <ul className="flex justify-between items-center gap-10 ">
            <li className=" border-b-2 hover:border-primary  ">
              <a
                href="#portal"
                onClick={() => setPage(1)}
                className="text-24 block py-[19px] px-32"
              >
                1
              </a>
            </li>
            <li className=" border-b-2 hover:border-primary  ">
              <a
                href="#portal"
                onClick={() => setPage(2)}
                className="text-24 block py-[19px] px-32"
              >
                2
              </a>
            </li>
            <li className=" border-b-2 hover:border-primary  ">
              <a
                href="#portal"
                onClick={() => setPage(3)}
                className="text-24 block py-[19px] px-32"
              >
                3
              </a>
            </li>
          </ul>
          <a href="#portal" className=" ">
            {" "}
            <span className="p-30 inline-block -rotate-90 border  rounded-4 hover:bg-primary ">
              <VectorRigthIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductAll;
