const express = require('express');
const cors = require('cors');
require('dotenv').config();

const todoRoutes = require('./routes/todo');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://todo-fullstack-tan-xi.vercel.app',
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('TaskFlow API is running');
});

app.use('/api', todoRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});