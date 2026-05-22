const { formidable } = require('formidable');

const {
  create: createTodo,
  get,
  remove,
  update,
  toggleComplete,
} = require('../model/todo');

exports.create = async (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields) => {
    if (err) {
      return res.status(400).json({
        error: 'Form could not be processed',
      });
    }

    const description = Array.isArray(fields.description)
      ? fields.description[0]
      : fields.description;

    if (!description) {
      return res.status(400).json({
        error: 'Description is required',
      });
    }

    try {
      const todo = await createTodo(description);

      return res.json(todo);
    } catch (error) {
      return res.status(400).json({
        error: 'Could not create todo',
      });
    }
  });
};

exports.read = async (req, res) => {
  try {
    const todos = await get();

    return res.json(todos);
  } catch (error) {
    return res.status(400).json({
      error: 'Could not fetch todos',
    });
  }
};

exports.removeTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await remove(id);

    return res.json({
      message: 'Todo deleted successfully',
    });
  } catch (error) {
    return res.status(400).json({
      error: 'Could not delete todo',
    });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  try {
    const todo = await update(id, description);

    return res.json(todo);
  } catch (err) {
    return res.status(400).json({
      error: 'Could not update todo',
    });
  }
};

exports.completeTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const todo = await toggleComplete(id, completed);

    return res.json(todo);
  } catch (err) {
    return res.status(400).json({
      error: 'Could not update completion status',
    });
  }
};
