import React from 'react';
import './App.css';
import Data from './Data.js';

class Task extends React.Component{
	  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    };
	
	handleClick(e) {
		this.props.onClick(e)
	}
	
	render() {
		const done = this.props.isDone;
	return(
		<li className= "task-item" 
			id={this.props.taskID}
			style={done ? {"textDecoration":"line-through"} : null}
			onClick={this.handleClick}>
			{this.props.content}
			
			<a className= {done && "task-item-done"}
				style={{'text-decoration': 'line-through'}}>
				<span className='task-delete'>X</span>
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
		console.log(`we getting it started ${typeof(Object.keys(e))} keys: ${Object.keys(e)}`)
		const eventContent = e
		//change a task to the opposite value
		const newData = this.state.tasks;
		console.log(newData[0])
		let task = newData.filter( t => {
			console.log(`task content is ${t} vs ${e}`)
			return task === e
		})[0];
		console.log(task)
		const index = newData.indexOf(task);
		if(index !== -1){
			task.completed = !task.completed;
			newData[index] = task;
			this.setState({ tasks: newData });
		}
		console.log(`we made it to the bottom ${index}`)
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
					/>
					)
			})
		return(
			<div className='task-list'>{taskList}</div>)
			
	}
}

