import React from 'react';
import { addDb, removeDb } from '../../utilites/database';
import './Gun.css'
const Gun = (props) => {
  const {img, name, bullet, capacity, action, price, category} = props.gun;
  const addToCart = (price) =>{
    addDb(price)
  };

  const removeFromCart = price =>{
   removeDb(price)
  };
  return (
    <div className='gun'>
      <img className='w-64 mx-auto mb-2 rounded' src={img} alt="" />
      <h2>Name: {name}</h2>
      <p><span className='font-bold text-xl'>Bullet</span>: {bullet}</p>
      <p>Capacity: {capacity}</p>
      <p>Action: {action}</p>
      <p><span className='font-bold text-xl'>Price</span>: $ {price}</p>
      <p>Category: {category}</p>
    <div className='flex justify-around mt-5'>

    <button onClick={()=> addToCart(price)} type="button" className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-2 py-1 rounded font-bold text-white'>Add to Cart</button>

      <button onClick={()=> removeFromCart(price)} type="button" className='bg-gradient-to-r from-red-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 px-2 py-1 rounded font-bold text-white'>Remove</button>
    </div>
    </div>
  );
};

export default Gun;