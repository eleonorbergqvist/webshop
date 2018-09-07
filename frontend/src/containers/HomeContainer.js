import React, { Component } from 'react';
import Campaign from '../components/Campaign';
import NavbarBottom from '../components/NavbarBottom';
import NavbarTop from '../components/NavbarTop';
import ProductList from '../components/ProductList';

class HomeContainer extends Component {
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
        <Campaign />
        <ProductList items={products} />
        <NavbarBottom />
      </div>
    );
  }
}

export default HomeContainer;
