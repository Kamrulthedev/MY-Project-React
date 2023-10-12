/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    return (
        <div className='container'>
            <h1 className='text-4xl font-bold'>Hallo Waold</h1>
            <Cart></Cart>
        </div>
    );
};

export default Home;