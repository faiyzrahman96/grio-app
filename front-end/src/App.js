import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Counter from './Counter.js'
import './App.css';


class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Counter />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}

export default App;
