"use client"
import Link from 'next/link';
import React from 'react';

function NavLink({href, text}) {
    return (
        <Link  href={href}>
            <a > {text}</a>
        </Link>
    );
}

export default NavLink;