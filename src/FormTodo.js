import React,{ useState} from 'react';
import { Button, Form } from 'react-bootstrap';
function FormTodo({ addTodo }) {
    const [value, setValue] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter a Text"
        />
  
        <Button type="submit">Add</Button>
      </Form>
    );
  }
  export default FormTodo;