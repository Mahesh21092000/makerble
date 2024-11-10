import React, { useState } from 'react';
import './styles.scss'
import Progress from '../ProgressBar/Progress'

function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  
  const addTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { task, completed: false }]);
      setTask(''); 
    }
  };

 
  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

 
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
    <div className="todo" >
      <h1>To-Do List</h1>
      <form onSubmit={addTodo} >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          
        />
        <button type="submit" >
          Add
        </button>
      </form>
      <div className='todo-list'>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              padding: '10px',
              borderBottom: '1px solid #ccc',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '350px',
              margin: '0 auto',
              textDecoration: todo.completed ? 'line-through' : '',
            }}
          >
            <span
              onClick={() => toggleComplete(index)}
              style={{ cursor: 'pointer' }}
            >
              {todo.task}
            </span>
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
    <Progress/>
    </div>
  );
}

export default Todo;
