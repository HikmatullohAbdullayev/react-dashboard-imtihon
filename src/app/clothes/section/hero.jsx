// import Input from '@/components/Input';
import ProductAll from '@/app/layout/components/ProductAll';
import React from 'react';

function Hero(props) {
    return (
        <section>
            <h1>Clothes</h1>
            
            <ProductAll url={"clothes"} />
        </section>
    );
}

export default Hero;