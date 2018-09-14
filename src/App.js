import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
    }
    this.onInput = this.onInput.bind(this);
  }
  onInput(e) {
    console.log(e.target);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p contentEditable onInput={this.onInput}>
          {this.state.hour}
        </p>

      </div>
    );
  }
}

export default App;
