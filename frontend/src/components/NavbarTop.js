import React from 'react';
import LeftChevron from '../images/chevron-left.svg';
import Bar from '../images/bars.svg';
import './NavbarTop.css';

const NavbarTop = _props => {
  return (
    <div className="NavbarTop">
      <img className="NavbarTop__Icon" src={LeftChevron} alt="" />
      <h1>Webshop</h1>
      <img className="NavbarTop__Icon" src={Bar} alt="" />
    </div>
  );
};

export default NavbarTop;
