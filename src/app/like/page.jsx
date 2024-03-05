"use client"

import React from 'react';
import { global } from 'styled-jsx/css';
import  { useEffect, useState } from "react";

function Like(props) {
    



const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const chekfavorite = localStorage.getItem("favorite");
    const parsedFavorite = chekfavorite ? JSON.parse(chekfavorite) : [];

    setFavorite([...parsedFavorite]);

    console.log(parsedFavorite);
  }, []); 

    return (
        <div>
            like
            <div>
                {favorite.map((item) =>(
                    <div key={item.id}>
                            <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Like;