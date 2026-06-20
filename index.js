const express = require('express');
const cors = require('cors');
require('dotenv').config();

const todoRoutes = require('./routes/todo');

const app = express();
const port = process.env.PORT || 8000;

const allowedOrigins = [
  'http://localhost:3000',
  'https://todo-fullstack-app-omega.vercel.app',
  'https://todo-fullstack-tan-xi.vercel.app',
];

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.options('*', cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('TaskFlow API is running');
});

app.use('/api', todoRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
