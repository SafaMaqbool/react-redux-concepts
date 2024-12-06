import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
const Home = () => {
  return (
    <>
    <FaCartPlus className='add-to-cart'/>
      <div className="cart-container">
        <div className="image-container item">
          <img src="/assets/shoe.jpeg" alt="" />
        </div>
        <div className="text-container item">
          <span>Mens shoe</span> <br />
          <span>Price $50</span>
        </div>
        <div className='btn-container item '>
            <button>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default Home