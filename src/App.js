import React, { Component } from 'react';
import TaskBar from './TaskBar';
import TaskList from './TaskList';
import Data from './Data.js';

export default class App extends Component {
  constructor(props){
     super(props);
     this.state = {
       tasks: Data,
       count: Data.length + 1,
       showCompleted: true,
     }

     this.addTask = this.addTask.bind(this);  
  }
  addTask(t){
    //update the data list
    //create a new task object and add to array
    console.log(t);
    const capTask = t[0].toUpperCase() + t.slice(1, t.length);
    const newTask = {
      id: this.state.count,
      content: capTask,
      completed: false
    }
    let newTaskList = this.state.tasks;
    newTaskList.push(newTask);
    this.setState({ 
      tasks: newTaskList,
      count: this.state.count +1
       })
  }
  render() {
    const data = this.state.tasks
    return (
      <div className="App">
        <h1> What must be done today?</h1>
        <TaskBar 
          className='task-bar'
          submitTask={this.addTask.bind(this)} 
          />
        <TaskList tasks={data}/>
      </div>
    );
  }
}

