/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {

    const [Allactors, SetAllactor] = useState([]);
 


      
    useEffect(() => {
            fetch('pictuer.json')
            .then((res)=> res.json())
            .then((data) => SetAllactor(data)); 
    },[]);

    

    return (
     <div className='container'>
          <div className='Home-container '> 
         <div className="crat-container"> 
         {
          Allactors.map((actors) => (<div key={actors.id} className='Cart'>
          <div className="cart-img">
            <img className='img'  src="https://i.ibb.co/5LqPZYV/marcos-paulo-prado-Pn-Er-HCrt-Xnw-unsplash.jpg" alt="" />
            <h1 className='text-2xl font-bold'>Hanry aliaren</h1>
            <p><small>Lorem ipsum dolor sit korima fugit dolore esse, veniam nemo porro assumenda accusamus</small></p>
         
            <div className="info">
            <p>salary: 400$</p>
            <p>Writer</p>
            
            </div>
            <button className='button'>...select...</button>
          </div>
         </div>))
         }

             </div>
             <div className="cart">
              <h1 className='text-4xl font-bold'>This is cart</h1>
             </div>

          </div>
           
           
       </div>
    );
};

export default Home;