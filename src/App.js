import { useState } from 'react';
import './App.css';
import { Todowrapper } from './Components/Todowrapper';

    

function App() {
  return (
    <div className="App">
    <Todowrapper/> 
    </div>
    
    /*<div className="App">
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
    */

  );
}

export default App;
