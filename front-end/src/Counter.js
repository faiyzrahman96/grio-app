import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Popup from 'reactjs-popup'
import { confirmAlert } from 'react-confirm-alert';
import './Counter.css';

class incrementValue extends Component {
	incrementValue = () => {
		confirmAlert({
			title: 'Counter Increment',
			message: 'Are you sure?',
			buttons: [
				{
					label: 'Cancel',
					onClick: () => alert('Cancel')
				},
				{
					label: 'Confirm',
					onClick: () => alert('Confirm')
				}
			]

		})
	};
}

class Counter extends Component {

	

	render() {
		return(
			<div className="Counter">
				<h1>Counter:{"      "} </h1>
				<h1>0</h1>
				<button onClick={this.incrementValue}>Increment</button>
			</div>
		);
	}
}

export default Counter;