import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Table, Form, Button, Card } from 'react-bootstrap'
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
      newTask: '',

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
          task.edit = !task.edit;
          return task
        } else {
          return task
        }
      });
      return {
        tasks
      }
    })
  }


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
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}  >
                <Card.Body>
                  <Card.Title>Tasks App</Card.Title>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="taskName">
                      <Form.Label>Task Name</Form.Label>
                      <Form.Control type='text' placeholder='Insert your task title' name='title' onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group controlId="taskName">
                      <Form.Label>Task Description</Form.Label>
                      <Form.Control as="textarea" rows="3" placeholder='Insert your task description' name='description' onChange={this.handleOnChange} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Task Name</th>
                    <th>Task Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tasks.map(
                    (task) =>
                      <tr key={task.id} >
                        <td>{task.id} </td>
                        <td onClick={() => this.handleDone(task.id)} className={task.done ? 'done' : ''} >   {task.title}  </td>
                        <td>{task.description}</td>
                        <td>
                          <span onClick={() => this.handleEdit(task.id)}><FontAwesomeIcon icon={faEdit} /></span>
                          <span onClick={() => this.handleDelete(task.id)}><FontAwesomeIcon icon={faTrash} /> </span>
                        </td>
                      </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
