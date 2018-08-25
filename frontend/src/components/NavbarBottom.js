import React from 'react';
import ShoppingCart from '../images/shopping-cart.svg';
import User from '../images/user.svg';
import Cogs from '../images/cogs.svg';
import './NavbarBottom.css';

const NavbarBottom = _props => {
  return (
    <div className="NavbarBottom">
      <img className="NavbarBottom__Icon" src={User} alt="" />
      <img className="NavbarBottom__Icon" src={Cogs} alt="" />
      <img className="NavbarBottom__Icon" src={ShoppingCart} alt="" />
    </div>
  );
};

export default NavbarBottom;
