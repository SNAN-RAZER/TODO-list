import React,{ useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const FormElement=(props)=>{
    const {AddItems,setShowAddForm}=props;
    const [todo,setTodo]=useState('');
    const onSubmit=(item)=>{
        AddItems(
        item
        );
        setShowAddForm(false);
    }
    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>TODO Name</Form.Label>
          <Form.Control type="text" 
          value={todo}
          onChange={(event)=>setTodo(event.target.value)}
          placeholder="Enter todo" />
          
        </Form.Group>
  
        
        <Button variant="primary"
        onClick={()=>onSubmit(todo)}
        >
          Submit
        </Button>
      </Form>
    )
}

export default FormElement;