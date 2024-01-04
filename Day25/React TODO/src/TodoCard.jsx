import React, { useState } from 'react';
import './App.css';

const TodoCard = ({ todo, updateTodo, deleteTodo }) => {
  const [editing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, editedTodo);
    setEditing(false);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-card">
      <h3>{todo.taskName}</h3>
      <p>{todo.description}</p>
      <p>Status: {todo.status}</p>

      {editing ? (
        <>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
          <input
            type="text"
            value={editedTodo.taskName}
            onChange={(e) => setEditedTodo({ ...editedTodo, taskName: e.target.value })}
          />
          <input
            type="text"
            value={editedTodo.description}
            onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })}
          />
          <select
            value={editedTodo.status}
            onChange={(e) => setEditedTodo({ ...editedTodo, status: e.target.value })}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoCard;
