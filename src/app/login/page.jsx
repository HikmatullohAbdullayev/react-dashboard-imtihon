"use client";
import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function LoginPage(props) {
  const router = useRouter();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRefAdd = useRef(null);
  const emailRefAdd = useRef(null);
  const passwordRefAdd = useRef(null);

  let [userAdd, setUserAdd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    axios
      .post("https://reqres.in/api/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);

        console.log(response.data.token);

        router.push("/");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Emailda xatolik bor, qaytadan urinib ko'ring");
      });
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();

    localStorage.setItem("userInfo", "userBor");

    router.push("/home");
  };
  useEffect(() => {
    // Qachondur kerak bo'lishi mumnin
    const tokenTrue = localStorage.getItem("token");
    const userInfo = localStorage.getItem("userInfo");
    setUserAdd(userInfo);
  }, []);

  return (
    <section className="flex flex-col justify-between   items-center container px-20 mx-auto max-w-[1338px]  pb-[129px] ">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {userAdd ? (
        <form className="max-w-[400px] mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-left text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              name="chek"
              id="chek"
            />
            <label className="" htmlFor="chek">
              Remember my details
            </label>
          </div>
          <button className="bg-primary text-white py-16 px-24 rounded-md  focus:outline-none focus:shadow-outline-blue active:bg-primary">
            Send
          </button>
        </form>
      ) : (
        <form className="max-w-[400px] mx-auto" onSubmit={handleSubmitAdd}>
          <div className="mb-4">
            <label className="block text-left text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              ref={nameRefAdd}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700" htmlFor="email">
              Email 2
            </label>
            <input
              ref={emailRefAdd}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRefAdd}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              name="chek"
              id="chek"
            />
            <label className="" htmlFor="chek">
              Remember my details
            </label>
          </div>
          <button className="bg-primary text-white py-16 px-24 rounded-md  focus:outline-none focus:shadow-outline-blue active:bg-primary">
            Send
          </button>
        </form>
      )}
    </section>
  );
}

export default LoginPage;
