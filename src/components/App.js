
import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import TaskList from './TaskList';


export default function App() {

  const [inputValue, setInputValue] = useState( '' );
  const [tasks, setTasks] = useState( [] );

  const handleChange = e => {
    setInputValue( e.target.value );
  };

  const handleAdd = ( e ) => {
    e.preventDefault( e );

    if ( inputValue.trim() === '' ) return;

    setTasks( [...tasks, {
      text: inputValue,
      id: Date.now()
    }] )

    setInputValue( '' );
  }

  const handleDelete = idToRemove => {
    setTasks( tasks.filter( task => task.id !== idToRemove ) )
  }

  return (
    <main className="App">
      <h1>Tasks</h1>
      <Form
        handleAdd={handleAdd}
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <TaskList
        tasks={tasks}
        handleDelete={handleDelete}
      />

    </main>
  );
}
