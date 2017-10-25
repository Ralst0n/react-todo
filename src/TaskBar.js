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
		this.handleEnter = this.handleEnter.bind(this);
	}
	handleChange(e) {
		this.setState({ input: e.target.value })
	}
	handleButtonClick() {
		if(this.state.input) {
			console.log('in the input')
			this.props.submitTask(this.state.input)
			this.setState({ input: '' })
		}
	}
	handleEnter(e) {
		if (e.keyCode === 13){
			this.handleButtonClick();
		}
	}
	render() {
		const inputValue = this.state.input;
		return(
			<div className='task-bar'>
				<input 
				type='text'
				value={inputValue}
				onChange={this.handleChange}
				onKeyDown={this.handleEnter}
				placeholder="Add new task"/>
			<div className='task-bar2'>
				<button onClick={this.handleButtonClick}>Add</button>
				      <label id="checkbox">
        			  <input type='checkbox'/>
        		      	Show completed
      				  </label>
			</div>
			</div>
			)
	}
}