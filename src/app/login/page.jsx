"use client"
import React from 'react';
import {useRef} from "react"
import axios from 'axios';
import  { useEffect, useState } from "react";

function LoginPage(props) {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('https://reqres.in/api/login', {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      })
      .then(function (response) {

        localStorage.setItem("token", response.data.token);

       
        console.log(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
    };

    useEffect(() => {
      // Qachondur kerak bo'lishi mumnin
      const storedToken = localStorage.getItem("token");
  
    }, []);

    return (
        <section className="flex flex-col justify-between   items-center container px-20 mx-auto max-w-[1338px]  pb-[129px] ">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="max-w-[400px] mx-auto" onSubmit={handleSubmit} >
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
          <button
          
            className="bg-primary text-white py-16 px-24 rounded-md  focus:outline-none focus:shadow-outline-blue active:bg-primary"
            
          >
            Send
          </button>
        </form>
      </section>
      
    );
}

export default LoginPage