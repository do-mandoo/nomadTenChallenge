import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = e => {
    setTodo(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (todo === '') return;

    setTodo('');
    setTodos(prev => [todo, ...prev]);
  };
  console.log(todos, 'todos');

  return (
    <div>
      <h1>My ToDos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type='text' placeholder='Write your to do...' />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
