const pool = require('./database');

const create = async (description) => {
  try {
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES ($1) RETURNING *',
      [description],
    );
    return newTodo.rows[0];
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message);
    return null;
  }
};
const get = async () => {
  try {
    const todos = await pool.query('SELECT * FROM todo');

    return todos.rows;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message);
    return null;
  }
};
const remove = async (id) => {
  try {
    await pool.query(
      'DELETE FROM todo WHERE todo_id = $1',
      [id],
    );

    return true;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message);

    return null;
  }
};
const update = async (id, description) => {
  try {
    const updatedTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *',
      [description, id],
    );

    return updatedTodo.rows[0];
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message);
    return null;
  }
};

const toggleComplete = async (id, completed) => {
  try {
    const updatedTodo = await pool.query(
      'UPDATE todo SET completed = $1 WHERE todo_id = $2 RETURNING *',
      [completed, id],
    );

    return updatedTodo.rows[0];
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message);
    return null;
  }
};

module.exports = {
  create,
  get,
  remove,
  update,
  toggleComplete,
};
