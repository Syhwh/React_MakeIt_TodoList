import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [{
        id: 1,
        title: 'First task',
        description: 'First task description',
        done: false
      }],
      newTask: ''
    }
  }

  handleOnChange = (e) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    this.setState({
      [name]: value
    });

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(state => {
      const tasks = state.tasks.concat({ id: this.state.tasks.length + 1, title: this.state.title, description: this.state.description, done: false });
      return {
        tasks,
        newTask: '',
      };
    });

  };

  handleDone = (id) => {
    this.setState(state => {
      const tasks = state.tasks.map((task) => {
        if (task.id === id) {
          task.done = !task.done
          return task;
        } else {
          return task
        }
      });
      return {
        tasks,
      };
    });
  };

  handleDelete = (id) => {
    this.setState(state => {
      const tasks = state.tasks.filter((task) => task.id === id ? '' : task);
      return {
        tasks
      }
    })
  }

  handleEdit = (id) => {
    this.setState(state => {
      const tasks = state.tasks.map(task => {
        if (task.id === id) {
          // edit the task
        } else {
          return task
        }
      });
      return {
        tasks
      }
    })
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.tasks.map(
            (task) =>
              <li key={task.id} >
                <span onClick={() => this.handleDone(task.id)} className={task.done ? 'done' : ''}>   {task.title}  </span>
                <span>{task.description}</span>
                <span onClick={() => this.handleEdit(task.id)}><FontAwesomeIcon icon={faEdit} /></span>
                <span onClick={() => this.handleDelete(task.id)}><FontAwesomeIcon icon={faTrash} /> </span>


              </li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='taskName' >Task Name</label>
          <input type='text' placeholder='Insert your task title' name='title' onChange={this.handleOnChange} />
          <label htmlFor='taskDescription' >Task Description</label>
          <textarea type='submit' placeholder='Insert your task description' name='description' onChange={this.handleOnChange} />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }

}

export default App;
