import React from "react";

const TodoList= (props) =>{
    return(
        <>
        <div className="style">
     <p style={{background:props.completed?'green':'white'}}>{props.text}
     <button onClick={()=> {props.onSelectComplete(props.id)}} > Complete </button> 
     <button onClick={()=> {props.onSelect(props.id)}} > Delete </button> </p>
     </div>
    </>
    )};

export default TodoList;