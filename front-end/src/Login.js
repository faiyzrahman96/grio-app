import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import Login_form from './Login_form';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login_form />, document.getElementById('login_root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
