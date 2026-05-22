export const createTodo = async (todo) => {
  const response = await fetch('/api/todo/create', {
    method: 'POST',
    body: todo,
  });

  const text = await response.text();
  console.log('CREATE RESPONSE:', response.status, text);

  return text ? JSON.parse(text) : null;
};

export const getTodos = async () => {
  const response = await fetch('/api/todos');

  return response.json();
};

export const removeTodo = async (id) => {
  const response = await fetch(`/api/todo/${id}`, {
    method: 'DELETE',
  });

  return response.json();
};
export const updateTodo = async (id, description) => {
  const response = await fetch(`/api/todo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description }),
  });

  return response.json();
};
export const completeTodo = async (id, completed) => {
  const response = await fetch(`/api/todo/${id}/complete`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  });

  return response.json();
};
