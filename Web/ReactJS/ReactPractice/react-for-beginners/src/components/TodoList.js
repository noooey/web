import React, { useState } from 'react';

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo == "") { return; }
    setTodos((current) => [todo, ...current]);
    setTodo("");
  }

  return (
    <div>
      <h1>My ToDo List ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} text="Text" placeholder="Write your to do..." onChange={onChange}></input>
        <button>+</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;