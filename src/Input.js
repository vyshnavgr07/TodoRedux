import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { addtodo, deletetodo, edittodo } from './formSlice';
import { Button, Form, ListGroup } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const [add, setAdd] = useState("");
  const [edit, setEdit] = useState(null);

  const handleaddtodo = () => {
    if (add.trim() !== "") {
      if (edit !== null) {
        dispatch(edittodo({ id: edit, text: add }));
        setEdit(null);
      } else {
        dispatch(addtodo(add));
      }
      setAdd("");
    }
  };

  const handledeletetodo = (id) => {
    dispatch(deletetodo(id));
  };

  const handleedittodo = (id, text) => {
    setAdd(text);
    setEdit(id);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title text-center text-primary mt-4 mb-4">Todo List</h1>
      <Form className="add-todo mb-3">
        <Form.Control
          type="text"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
          placeholder="Add a new task"
          className="todo-input mr-2"
        />
        <Button
          onClick={handleaddtodo}
          className={`todo-button ${edit !== null ? 'btn-warning' : 'btn-success'}`}
        >
          {edit !== null ? 'Edit Task' : 'Add Task'}
        </Button>
      </Form>
      <ListGroup className="todo-list">
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center todo-item mb-2">
            <span>{todo.text}</span>
            <div>
              <Button
                onClick={() => handledeletetodo(todo.id)}
                variant="danger"
                className="delete-button mr-2"
              >
                Delete
              </Button>
              <Button
                onClick={() => handleedittodo(todo.id, todo.text)}
                variant="primary"
                className="edit-button"
              >
                Edit
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default App;
