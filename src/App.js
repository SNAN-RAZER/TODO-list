import React, { useState } from "react";
import FormElement from "./components/FormElement";
import NavBar from "./components/NavBar";
import ToDoListContainer from "./components/ToDoListContainer";

const App=(props)=>{

    const[showAddForm,setShowAddForm]=useState(false);
    const [items,setItems]=useState([
        {
            id:1,
            toDO:'Get vegetables'
        },
        {
            id:2,
            toDO:'Get Cold drinks'
        },
        {
            id:3,
            toDO:'Go to Gym'
        },
        {
            id:1,
            toDO:'Go to party'
        },
     ]);
     const AddItems=(item)=>{
        const data={
            id:item.length,
            toDO:item
        }
        setItems([...items,data]);
     }

    return(
        <>
        <NavBar setShowAddForm={setShowAddForm}/>
        {showAddForm===true?<FormElement AddItems={AddItems} setShowAddForm={setShowAddForm}/>:''}
        <ToDoListContainer TODOitems={items}/>
        </>
    )
}


export default App;