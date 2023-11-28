import { useState } from 'react';
import './App.css';
import Todo from './Components/todo';

    

function App() {

// const [todoitem, settodoitem]  = useState([""]);
let todoitem = [];
// const todoforminput = document.getElementById("ntinput");

function addtodo(task){
   let newtodo = {
    task, 
    iscompleted: false,
    id: Date.now
  }

  const todoforminput = document.getElementById("ntinput");
  // const textinput = todoforminput.value.trim();
  todoitem.push(todoforminput)
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
      <form className="new-task-input">
        <input
        type="text"
        className="ntinput-section"
        placeholder="  Enter task"
        defaultValue="Enter text here"
        id="ntinput"
        name="ntinput"
    ></input>
    <button type='button' className="create-new-task-button" onClick={addtodo}> + Add Task</button>
    
    </form> 
            {/* <Todo></Todo> */}
      </div>
      <div className='todo-display-section'> {
        //  todoitem.map()
      }
       
        
        <form className='task-input-list'> hello</form>
      
      
      </div>  
        
      
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
