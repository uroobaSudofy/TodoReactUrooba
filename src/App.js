import React, {useState}from "react";
import './App.css';
import TodoList from "./todo";

const App =()=>{
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  
  const inputEvent=(event)=>{
    setInput(event.target.value);
    };

  const itemsList=()=>{
    setTodos((prevTodos)=>{
      return [...prevTodos,{text:input,completed:false}];
    });
    setInput("");
  } 

  const completeTask=(id)=>{
   console.log(id);
   let newTodos=[...todos]
   newTodos= newTodos.map((item,index)=>{
     console.log(index);
    if(index===id){
      return{...item, completed: !item.completed};
    }
    return item;
  })
  console.log(newTodos);
  setTodos(newTodos);

    
  } 
  // const handleComplete=(todo)=>{
  //   setTodos(
  //     todos.map((item)=>{
  //       if(item.id===todo.id){
  //         return {...item, completed : !item.completed}
  //       }
  //       return item;
  //     })
  //   )
  // }


  const deleteTask=(id)=>{
    console.log('deleted');
    
    setTodos((prevTodos)=>{
      return prevTodos.filter((arrayElement,index)=>{
       return index !== id;
      });
    });
  };

  return<>
  <div className="App">
    <div className="header">Todo App</div>
    <div className="input_div">
      <input type="text" placeholder="Enter task here..." onChange={inputEvent} value={input}/>
      <button onClick={itemsList}>Add</button>
    </div>
    <ol>
      {todos.map((todo,index)=>{
       return <TodoList
        key={index} 
        id={index}
        text={todo.text} 
        onSelect={deleteTask}
        onSelectComplete={completeTask}
        completed={todo.completed}
        />;
       })}
      
    </ol>
    {/* <button className="button-complete task-button" onClick={()=>handleComplete(todo)}>Complete</button>  */}
  </div>
  </>
}


export default App;
