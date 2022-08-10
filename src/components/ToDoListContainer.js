import React from "react";
import Container from 'react-bootstrap/Container';
import TODOItem from "./TODOItem";
const ToDoListContainer=(props)=>{
    const {TODOitems}=props;
   
    const renderElements=
    TODOitems.map((TODOitem)=>
               <TODOItem TODOitem={TODOitem}/>
        )
    
    return (
        

<Container>
  
    {renderElements}
    
    
</Container>

   
        )
}

export default ToDoListContainer;