import React from 'react';
import './App.css';

export default class TaskBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			input: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	handleChange(e) {

	}
	handleButtonClick(e) {
		if(this.state.input) {

		}
	}
	render() {
		const inputValue = this.state.value;
		return(
			<div className='task-bar'>
				<input 
				type='text'
				value={inputValue}
				onChange={this.handleChange}
				placeholder="Add new task"/>
				<button onClick={this.handleButtonClick}>Add</button>
			</div>
			)
	}
}