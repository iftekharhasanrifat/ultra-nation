import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum,country)=> sum+country.population,0);
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation +country.population;
    // }
    return (
        <div>
            <h2>Total Population : {totalPopulation}</h2>
        </div>
    );
};

export default Cart;