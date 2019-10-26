import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import TaskForm from './components/TaskForm';
import TasksTable from './components/TasksTable';
import TaskEditForm from './components/TaskEditForm';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [{
        id: 1,
        title: 'First task',
        description: 'First task description',
        done: false,
        edit: false
      }],
      newTask: {
        id: '',
        title: '',
        description: '',
        done: false,
        edit: false
      },

    }
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newTask: { ...prevState.newTask, id: this.state.tasks.length + 1, [name]: value }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      tasks: [...prevState.tasks, prevState.newTask],
      newTask: { id: '', title: '', description: '', done: false, edit: false }
    }));
  };

  handleEditContent = (id) => {
    this.setState(state => {
      const tasks = state.tasks.map(task => {
        if (task.id === id) {
          task.title = this.state.title
          task.description = this.state.description
          task.done = false
          task.edit = false
          return task
        } else {
          return task
        }
      });
      return {
        tasks
      }
    });
  }



  render() {
    return (
      <div className="App">
        <Container >
          <Row>
            <Col  >
              <TaskForm
                handleOnChange={this.handleOnChange}
                task={this.state.newTask}
                handleSubmit={this.handleSubmit} />
            </Col>
            <Col>
              <TasksTable data={this.state.tasks} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
