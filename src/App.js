import { useState } from 'react';
import './App.css';
import Todo from './Components/todo';

    

function App() {

// const [todoitem, settodoitem]  = useState([""]);
let todoitem = [];

function addtodo(task){
   let newtodo = {
    task, 
    iscompleted: false,
    id: Date.now
  }
  todoitem.push(newtodo)
  console.log(todoitem)
}

let store = "go to store";
 addtodo(store);

  return (

    
   
    <div className="App">
      <div className='to-do-wrapper'>
      <div className='to-do-contents'>
        <div className='to-do-header'>
            <h1 className='to-do-title'> To Do List</h1>  
        </div>
      <div className='task-section'> 
      <div className='new-task-button-section'> 
            <Todo></Todo>
      </div>
        <form className='task-input-list'> hello</form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
