"use client";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { request } from "@/config/request";
import "../../src/app/home/sections/img.css";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Like2Icon from "@/assets/icon/Like2Icon";
import ShopIcon from "@/assets/icon/ShopIcon";
import VectorRigthIcon from "@/assets/icon/VectorRigthIcon";

function ProductAll({ url }) {
  const router = useRouter();

  const [dataa, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState({});
  const [filterData, setFilterData] = useState([]);
  const [token, setToken] = useState(null);

  const [allProductFavorite, setAllProductFavorite] = useState([]);
  const [allProductCart, setAllProductCart] = useState([]);

  useEffect(() => {
    const chekToken = localStorage.getItem("token");
    setToken(chekToken);
    console.log(token);

    const fetchData = async () => {
      try {
        let response;
        switch (page) {
          case 1:
            response = await request.get(`/${url}?_start=0&_limit=12`);
            break;
          case 2:
            response = await request.get(`/${url}?_start=13&_limit=12`);
            break;
          case 3:
            response = await request.get(`/${url}?_start=15&_limit=12`);
            break;
          default:
            response = await request.get(`/${url}?_start=0&_limit=12`);
            break;
        }

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);
  // console.log(dataa);

  const bosildiFavorite = (item) => {
    try {
      const tekshirish = allProductFavorite.some(
        (product) => product.id === item.id
      );

      if (token) {
        if (!tekshirish) {
          setAllProductFavorite([...allProductFavorite, item]);
          localStorage.setItem(
            "favorite",
            JSON.stringify([...allProductFavorite, item])
          );
          toast.success("Muvafaqiyatli qo'shildi Favorite bo'limiga");
        } else {
          toast.error("Bu mahsulotdan bor Favorite bo'limida");
        }
      } else {
        toast.error("login qilin avval Favorite");
        router.push("/login");
      }
    } catch (error) {
      toast.error("Xatolik  bor");
      console.log(error.message);
    }
  };

  const bosildiCart = (item) => {
    try {
      const tekshirish3 = allProductCart.some(
        (product) => product.id === item.id
      );

      if (token) {
        if (!tekshirish3) {
          setAllProductCart([...allProductCart, item]);
          localStorage.setItem(
            "Cart",
            JSON.stringify([...allProductCart, item])
          );
          toast.success("Muvafaqiyatli qo'shildi Cart bo'limiga");
        } else {
          toast.error("Bu mahsulotdan bor Cart bo'limida");
        }
      } else {
        toast.error("login qilin avval Cart");

        router.push("/login");
      }
    } catch (error) {
      toast.error("Xatolik  bor");
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="text-end mr-20 border-b-2 border-[#686868]  p-[33px]">
        <select className=" rounded-4 px-10 py-16 border outline-transparent focus:outline-primary">
          <option className=" hover:bg-primary" value="Most popular" default>
            Most popular
          </option>
          <option value="Best Selling">Best Selling</option>
          <option value="Price: High to Low">Price: High to Low</option>
          <option value="Price: Low to High">Price: Low to High</option>
        </select>
      </div>
      <div
        id="portal"
        className="   flex justify-between   items-center container px-20 mx-auto max-w-[1338px]  pb-[129px] "
      >
        <Toaster position="top-center" reverseOrder={false} />

        <div className="w-full text-center mt-30 ">
          <div className="grid gap-40  relative  w-[100%]    bg-white rounded-6    grid-cols-[repeat(auto-fill,minmax(280px,1fr))]  mx-auto">
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
                        <p className="font-bold text-[10px] ">
                          ADD TO CART
                        </p>{" "}
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
      </div>
    </div>
  );
}

export default ProductAll;
