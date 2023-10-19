/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({slcetedActor, remaing ,totleCost}) => {
    console.log(slcetedActor);
    return (
        <div >
          <h1 className='font-bold'>KAMRUL</h1>
          <h1>totle actors: {slcetedActor.length}</h1>
          <h2>remaing: {remaing}</h2>
          <h3>Totle Cost:{totleCost}</h3>
          {
            slcetedActor.map((actor)=>(<li key={actor.id}>{actor.name}</li>))
          }
        </div>
    );
};

export default Cart;