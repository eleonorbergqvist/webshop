import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../images/shopping-cart.svg';
import User from '../images/user.svg';
import Cogs from '../images/cogs.svg';
import './NavbarBottom.css';

const NavbarBottom = _props => {
  return (
    <div className="NavbarBottom">
      <img className="NavbarBottom__Icon" src={User} alt="" />
      <img className="NavbarBottom__Icon" src={Cogs} alt="" />
      <Link to="/shoppingcart">
        <img className="NavbarBottom__Icon" src={ShoppingCart} alt="" />
      </Link>
    </div>
  );
};

export default NavbarBottom;
