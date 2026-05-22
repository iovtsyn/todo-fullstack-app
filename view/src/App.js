import React, { useState, useEffect } from 'react';
import './App.css';
import {
  getTodos,
  createTodo,
  removeTodo,
  updateTodo,
  completeTodo,
} from './util';

const App = () => {
  const [todo, setTodo] = useState({ description: '' });
  const [todoList, setTodoList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const filteredTodos = todoList.filter((todoItem) => {
    if (filter === 'active') {
      return !todoItem.completed;
    }

    if (filter === 'completed') {
      return todoItem.completed;
    }

    return true;
  });

  const fetchTodos = async () => {
    try {
      const data = await getTodos();

      setTodoList(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!todo.description.trim()) {
      return;
    }

    const formData = new FormData();
    formData.append('description', todo.description);

    try {
      await createTodo(formData);

      setTodo({ description: '' });
      await fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await removeTodo(id);

      await fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await updateTodo(id, editText);

      setEditingId(null);
      setEditText('');
      await fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className="top-bar">
        <button
          type="button"
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀ Light' : '🌙 Dark'}
        </button>
      </div>

      <h1>My To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo.description}
          onChange={(event) => setTodo({
            ...todo,
            description: event.target.value,
          })}
        />

        <button type="submit">Add Todo</button>
      </form>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <button type="button" onClick={() => setFilter('all')}>
          All
        </button>

        <button type="button" onClick={() => setFilter('active')}>
          Active
        </button>

        <button type="button" onClick={() => setFilter('completed')}>
          Completed
        </button>
      </div>

      <ol>
        {filteredTodos.map((todoItem) => (
          <li key={todoItem.todo_id}>
            {editingId === todoItem.todo_id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(event) => setEditText(event.target.value)}
                />

                <button
                  type="button"
                  className="save-button"
                  onClick={() => handleUpdate(todoItem.todo_id)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="todo-content">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={todoItem.completed}
                      onChange={async () => {
                        try {
                          await completeTodo(
                            todoItem.todo_id,
                            !todoItem.completed,
                          );

                          await fetchTodos();
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    />

                    <div>
                      <span
                        style={{
                          textDecoration: todoItem.completed
                            ? 'line-through'
                            : 'none',
                          textDecorationThickness: '1px',
                          textDecorationColor: '#8b8b8b',
                          opacity: todoItem.completed ? 0.6 : 1,
                        }}
                      >
                        {todoItem.description}
                      </span>

                      <div
                        style={{
                          fontSize: '12px',
                          color: '#666',
                          marginTop: '4px',
                        }}
                      >
                        {new Date(todoItem.created_at).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="todo-actions">
                  <button
                    type="button"
                    className="edit-button"
                    onClick={() => {
                      setEditingId(todoItem.todo_id);
                      setEditText(todoItem.description);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => {
                      const confirmed = window.confirm(
                        'Are you sure you want to delete this todo?',
                      );

                      if (confirmed) {
                        handleDelete(todoItem.todo_id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
