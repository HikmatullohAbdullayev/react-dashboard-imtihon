import React from 'react';

function Input({type,text,holder,name}) {
    return (
       <>
        <label htmlFor={name}>{text}</label>
        <input type={type} id={name} placeholder={holder}/>
        </>
    );
}

export default Input;