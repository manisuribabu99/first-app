import React from 'react';
import { Button } from 'react-bootstrap';
function Todo({ todo, index, removeTodo }) {
  return (
    <div>
      {todo.text}
      <span>
        <Button onClick={() => removeTodo(index)}>✕</Button>
      </span>
    </div>
  );
}
export default Todo;
