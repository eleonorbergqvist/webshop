import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import NavbarTop from '../components/NavbarTop';
import NavbarBottom from '../components/NavbarBottom';

class ProductListContainer extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch('../fixtures/products.json')
      .then(response => response.json())
      .then(products => {
        this.setState({
          products
        });
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <NavbarTop />
        <ProductList items={products} />
        <NavbarBottom />
      </div>
    );
  }
}

export default ProductListContainer;
