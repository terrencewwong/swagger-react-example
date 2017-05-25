import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SwaggerUI from './components/swagger'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SwaggerUI />
      </div>
    );
  }
}

export default App;
