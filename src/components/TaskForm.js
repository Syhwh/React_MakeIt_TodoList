import React from 'react';
import { Form, Button, Card } from 'react-bootstrap'

export default ({ handleOnChange, handleSubmit, task }) => {
  return (
    <Card style={{ width: '25rem' }}  >
      <Card.Body>
        <Card.Title>Tasks App</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="taskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Insert your task title'
              name='title'
              value={task.title}
              onChange={handleOnChange} />
          </Form.Group>
          <Form.Group controlId="taskName">
            <Form.Label>Task Description</Form.Label>
            <Form.Control as="textarea" rows="3"
              placeholder='Insert your task description'
              name='description'
              value={task.description}
              onChange={handleOnChange} />
          </Form.Group>
          <Button type='submit' >Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
