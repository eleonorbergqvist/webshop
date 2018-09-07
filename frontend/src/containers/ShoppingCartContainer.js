import React, { Component } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import NavbarTop from '../components/NavbarTop';
import NavbarBottom from '../components/NavbarBottom';

class ShoppingCartContainer extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <ShoppingCart />
        <NavbarBottom />
      </div>
    );
  }
}

export default ShoppingCartContainer;
