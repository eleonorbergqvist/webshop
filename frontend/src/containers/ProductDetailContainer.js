import React, { Component } from 'react';
import NavbarTop from '../components/NavbarTop';
import NavbarBottom from '../components/NavbarBottom';
import ProductDetail from '../components/ProductDetail';

class ProductDetailContainer extends Component {
  state = {
    product: {}
  };

  componentDidMount() {
    fetch('/fixtures/product.json')
      .then(response => response.json())
      .then(product => {
        this.setState({
          product
        });
      });
  }

  render() {
    const { product } = this.state;

    return (
      <div>
        <NavbarTop />
        {!isObjectEmpty(product) && <ProductDetail {...product} />}
        <NavbarBottom />
      </div>
    );
  }
}

const isObjectEmpty = x => Object.keys(x).length === 0;

export default ProductDetailContainer;
