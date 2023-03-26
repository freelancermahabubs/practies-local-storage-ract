import React, { useState } from 'react';
import { useEffect } from 'react';
import { getTotalPrice } from '../../utilites/calculate';
import Gun from '../Gun/Gun';
import './Guns.css'

const Guns = () => {
  const [guns, setGuns] = useState([]);
  useEffect(()=> {
    fetch(`data.json`)
    .then(res => res.json())
    .then(data => setGuns(data))
  },[]);

 const total = getTotalPrice(guns);
  return (
   <>
     <h1 className='text-2xl text-white rounded w-[64%] mx-auto mt-7 font-semibold bg-red-500 px-8 '>Welcome to our Guns World</h1>
     <h1 className='text-2xl font-bold mt-5'>Total Price : {total}</h1>
    <div className='guns grid lg:grid-cols-3 px-12 mt-12 pt-8'>
    {
      guns.map(gun => <Gun 
        key={gun.id}
        gun = {gun}
      />)
      
    }

    </div>
   </>
  );
};

export default Guns;