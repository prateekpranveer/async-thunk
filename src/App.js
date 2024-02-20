// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/userSlice';
import './App.css'; // Import CSS file for styling

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="container">
      <h1>Todos</h1>
      <button className="fetch-button" onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
      {todos.loading && <p className="loading">Loading...</p>}
      <ul className="todos-list">
        {todos.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
