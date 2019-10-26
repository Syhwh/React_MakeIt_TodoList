import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

class TaskEditForm extends Component {
  constructor(props) {

  }


  render() {
    return (
      <Card style={{ width: '25rem' }}  >
        {console.log(this.state)}
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
    );
  }
}

export default TaskEditForm