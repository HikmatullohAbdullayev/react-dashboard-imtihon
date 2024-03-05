"use client"
import React from 'react';
import { useRouter } from "next/navigation";


function Shop(props) {

const router = useRouter()
console.log(router);

if (1===1) {
    router.push("/login")
}
    return (
        <div>
            shop
        </div>
    );
}

export default Shop;