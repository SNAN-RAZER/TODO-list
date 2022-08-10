import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TODOList.css'
const TODOItem=(props)=>{

    const{id,toDO}=props.TODOitem;
    
    return(

        <Card  key={id} style={{ width: '80%',margin:' 10% 2%' }}>
     
      <Card.Body>
        <Card.Title className="title">{toDO}</Card.Title>
        <div className="buttons-container">
        <Button variant="primary" >Completed</Button>
        <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
    )
}
export default TODOItem;