import React, { useState } from 'react';
import TodoCard from './TodoCard';
import './App.css';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') {
      return true;
    } else {
      return todo.status === filter;
    }
  });

  return (
    <div className="lists container">
      <div className="mb-3">
        <label className="form-label">Filter by Status:</label>
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="row">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="col-md-4 mb-3">
            <TodoCard todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
