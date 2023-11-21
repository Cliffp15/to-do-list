import './App.css';

function App() {
  return (
    <div className="App">
      <div className='to-do-wrapper'>
      <div className='to-do-contents'>
        <div className='to-do-header'>
            <h1 className='to-do-title'> To Do List</h1>  
        </div>
      <div className='task-section'> 
      <div className='new-task-button-section'> 
            <form className='new-task-input'></form>
            <input type='text' id='ntinput' name='ntinput'></input>
            <button className='create-new-task-button'> + </button>   
            <p className='new-task-text'>Create New Task </p>
      </div>
        <form className='task-input-list'> hello</form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
