import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import ProductListContainer from './containers/ProductListContainer';
import ProductDetailContainer from './containers/ProductDetailContainer';
import './App.css';

console.log(LoginContainer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/products" component={ProductListContainer} />
          <Route path="/product/:id" component={ProductDetailContainer} />
          <Route path="/checkout" component={HomeContainer} />
          <Route path="/mypages" component={HomeContainer} />
          <Route path="/mypages" component={HomeContainer} />

          <Route path="/login/" component={LoginContainer} />
          <Route path="/logout" component={HomeContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/admin/login" component={LoginContainer} />
          <Route path="/admin/dashboard" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
