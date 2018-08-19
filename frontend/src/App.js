import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={HomeContainer} />
          <Route path="/login" compontent={HomeContainer} />
          <Route path="/logout" compontent={HomeContainer} />
          <Route path="/register" compontent={HomeContainer} />
          <Route path="/admin/login" compontent={HomeContainer} />
          <Route path="/admin/dashboard" compontent={HomeContainer} />
          <Route path="/checkout" compontent={HomeContainer} />
          <Route path="/mypages" compontent={HomeContainer} />
          <Route path="/mypages" compontent={HomeContainer} />
          <Route path="/products" compontent={HomeContainer} />
          <Route path="/product/:id" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
