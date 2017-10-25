import React from 'react';
import './App.css';
import Data from './Data.js';

class Task extends React.Component{
	  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleXClick = this.handleXClick.bind(this);
    };
	
	handleClick(e) {
		this.props.onClick(e.target.textContent)
	}
	handleXClick(e) {
		this.props.xClick(e.target.parentNode.previousSibling.textContent)
	}
	render() {
		const done = this.props.isDone;
	return(
		<li className= "task-item">
			<span 
			id={this.props.taskID}
			style={done ? {"textDecoration":"line-through"} : null}
			onMouseDown={this.handleClick}>
			{this.props.content}
			</span>
			<a 
				className= {done && "task-item-done"}
				onClick={this.handleXClick}
				style={{'textDecoration': 'line-through'}}>
				<span  className='task-delete'>X</span>
			</a>
		</li>
		)}
}

export default class TaskList extends React.Component {
	
	constructor(props){
	   super(props);
	   this.state = {
	     tasks: Data
	   }

   	 this.completeTask = this.completeTask.bind(this);	
	}
	
	completeTask(e) {
		//change a task to the opposite value
		const newData = this.state.tasks;
		let task = newData.filter( t => {
			return t.content === e
		})[0];
		const index = newData.indexOf(task);
		if(index !== -1){
			task.completed = !task.completed;
			newData[index] = task;
			this.setState({ tasks: newData });
		}
	}
	updateTasks(e) {
		//update the data list
		const newData = this.state.tasks;
		let task = newData.filter( t => {
			return t.content === e
		})[0];
		const index = newData.indexOf(task)
		if(index !== -1){
			newData.splice(index, 1);
			this.setState({	tasks: newData })
		}
	}
	render() {
		const tasks = this.state.tasks;
		let taskList = 
			tasks.map( (task) => {
				return(
					<Task
						key={task.id}
						taskID={task.id}
						content={task.content}
						isDone={task.completed}
						onClick={this.completeTask.bind(this)}
						xClick={this.updateTasks.bind(this)}	
					/>
					)
			})
		return(
			<div className='task-list'>{taskList}</div>)
			
	}
}

