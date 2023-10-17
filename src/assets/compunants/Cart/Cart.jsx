/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({slcetedActor}) => {
    console.log(slcetedActor);
    return (
        <div >
          <h1>totle actors: {slcetedActor.length}</h1>
          {
            slcetedActor.map((actor)=>(<li key={actor.id}>{actor.name}</li>))
          }
        </div>
    );
};

export default Cart;