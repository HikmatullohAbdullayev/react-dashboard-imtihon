"use client"

import React from 'react';
import { global } from 'styled-jsx/css';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Like(props) {

    const router = useRouter()


    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        const chekToken = localStorage.getItem("token")


        if (chekToken) {
            console.log("marhabo");
            const chekfavorite = localStorage.getItem("favorite");
            const parsedFavorite = chekfavorite ? JSON.parse(chekfavorite) : [];

            setFavorite([...parsedFavorite]);

            console.log(parsedFavorite);
        } else {
            router.push("/login")
        }

    }, []);

    return (
        <div>
            like
            <div>
                {favorite.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Like;