
import './App.css';
import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'; 
import Todo from './Todo';
function App() {
 const [todos, setTodo] = useState(['Take dogs for a walk', 'Take the rubbish out'])
 const [input, setInput] = useState('');

 const addTodo = (event) => {
       event.preventDefault();
       setTodo([...todos, input]);
       setInput('');
 }
 

  return (
    <div className="App">
     <h1>Hello..</h1> 
     <form>
     <FormControl>
      <InputLabel>Write a todo</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} />
     </FormControl>
     {/* <button onClick= {addTodo}>Add Todo</button> */}
     <Button disabled={!input} type='submit' onClick= {addTodo} variant="contained" color="primary">
      Add Todo
     </Button>
    </form>
     <ul>
       {todos.map(todo=> (
         <Todo text= {todo}/>
       )
        )}
     </ul>
    </div>
  );
}

export default App;
