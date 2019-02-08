import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form action="/App.py" method="post">
        <input type="text" placeholder="Username" id="username"/><br/>
        <input type="text" placeholder="Password" id="password"/><br/>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Login />
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
