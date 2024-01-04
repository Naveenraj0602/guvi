import React, { useState } from 'react';
import './App.css'; 


const TodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Not Completed');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      taskName,
      description,
      status,
    };

    addTodo(newTodo);

    setTaskName('');
    setDescription('');
    setStatus('Not Completed');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label"></label>
        <input
          type="text"
          className="form-control"
          placeholder='Title'

          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label"></label>
        <input
          type="text"
          className="form-control"
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Status:</label>
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn ">Add Todo</button>
    </form>
  );
};

export default TodoForm;
