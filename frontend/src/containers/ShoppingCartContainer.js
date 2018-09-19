import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/addToCart';
import ShoppingCart from '../components/ShoppingCart';
import NavbarTop from '../components/NavbarTop';
import NavbarBottom from '../components/NavbarBottom';

class ShoppingCartContainer extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <NavbarTop />
        <ShoppingCart products={products} />
        <NavbarBottom />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.cartReducer.products
  };
};

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
