/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {

    const [Allactors, SetAllactor] = useState([]);
    const [slcetedActor, setSelctedActors] = useState([]);
 
    const hanlerCilkActor = (actors) =>{
      setSelctedActors([...slcetedActor, actors])
    }
    console.log(slcetedActor);

      
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
            <img className='img'  src={actors.picture} alt="" />
            <h1 className='text-2xl font-bold'>{actors.name}</h1>
            <p><small>{actors.location}</small></p>
         
            <div className="info">
            <p>salary: {actors.salery}</p>
            <p>{actors.author}</p>
            
            </div>
            <button onClick={()=>hanlerCilkActor(actors)} className='button btn'>...select...</button>
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