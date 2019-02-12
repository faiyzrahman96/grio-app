import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Login_form.css';

class Login_form extends Component {
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form action="http://localhost:5000/login" method="post">
        <input type="text" placeholder="Username" name="username"/><br/>
        <input type="text" placeholder="Password" name="password"/><br/>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login_form;