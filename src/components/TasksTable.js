
import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './taskstable.css'

class TaskTable extends Component {
  constructor(props) {
    super()
    this.state = {
      tasks: props.data
    }
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
  }

  handleDelete = (id) => {
    this.setState(state => {
      const tasks = state.tasks.filter((task) => task.id === id ? '' : task);
      return {
        tasks
      }
    });
  }



  render() {
    return (
      <Table striped bordered hover>
        {console.log(this.props)}
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
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
                <td><input onChange={() => this.handleDone(task.id)} checked={task.done} type='checkbox' /> </td>
                <td className={task.done ? 'done' : ''}>{task.title}  </td>
                <td className={task.done ? 'done' : ''}>{task.description}</td>
                <td>
                  <span onClick={() => this.handleEdit(task.id)}><FontAwesomeIcon icon={faEdit} /></span>
                  <span onClick={() => this.handleDelete(task.id)}><FontAwesomeIcon icon={faTrash} /> </span>
                </td>
              </tr>
          )}
        </tbody>
      </Table>
    )
  }
}

export default TaskTable