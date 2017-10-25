import React, { Component } from 'react';
import TaskBar from './TaskBar';
import TaskList from './TaskList';

export default class App extends Component {
 
  render() {
    return (
      <div className="App">
        <TaskBar className='task-bar' />
        <TaskList />
      </div>
    );
  }
}

