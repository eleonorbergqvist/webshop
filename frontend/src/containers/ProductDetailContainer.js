import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarTop from '../components/NavbarTop';
import NavbarBottom from '../components/NavbarBottom';
import ProductDetail from '../components/ProductDetail';
import { simpleAction } from '../actions/simpleAction';
import { addToCart } from '../actions/addToCart';

const isObjectEmpty = x => Object.keys(x).length === 0;

class ProductDetailContainer extends Component {
  state = {
    product: {},
    selectedChoiceId: ''
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

  handleButtonClick = e => {
    this.props.simpleAction(Math.random());
  };

  handleCartButtonClick = e => {
    const { product, selectedChoiceId } = this.state;
    let option = product.options.filter(x => x.id === selectedChoiceId);
    option = option.length > 0 ? option[0] : null;

    this.props.addToCart({ product: product, option: option });
  };

  handleChoiceChange = id => {
    this.setState({
      selectedChoiceId: id
    });
  };

  render() {
    const { product, selectedChoiceId } = this.state;

    return (
      <div>
        <NavbarTop />

        <button onClick={this.handleButtonClick}>Kör!</button>

        <h1>Bobby {this.props.name}</h1>
        {!isObjectEmpty(product) && (
          <ProductDetail
            {...product}
            selectedChoiceId={selectedChoiceId}
            onAddToCartClick={this.handleCartButtonClick}
            onChoiceChange={this.handleChoiceChange}
          />
        )}
        <NavbarBottom />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.simpleReducer.name,
    products: state.cartReducer.products
  };
};

const mapDispatchToProps = dispatch => ({
  simpleAction: name => dispatch(simpleAction(name)),
  addToCart: product => dispatch(addToCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailContainer);
