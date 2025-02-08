import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full p-8 flex justify-between z-50">
      <Link to="/" className="text-xl text-orange-600 font-semibold"><img src='./logo.svg' alt=""  style={{width:'33px'}}/></Link>
  
      <Link to="/shop" className="text-xl text-orange-600 font-semibold mt-[0.3rem]">Shop</Link>
    </nav>
  );
}

export default Nav;
