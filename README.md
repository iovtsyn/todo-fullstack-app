# TaskFlow - Full-Stack Task Manager

A full-stack task management application built with React, Express, Node.js, and PostgreSQL.

## Live Demo

Frontend: https://todo-fullstack-app-omega.vercel.app
API: https://todo-fullstack-api.onrender.com/api/todos

## Features

* Create tasks
* Edit tasks
* Delete tasks
* Mark tasks as completed
* Filter tasks:

  * All
  * Active
  * Completed
* Dark mode
* Task timestamps
* Responsive modern UI
* PostgreSQL database persistence
* MVC backend architecture
* Deployed frontend and backend

## Tech Stack

### Frontend

* React
* JavaScript
* CSS
* Vercel

### Backend

* Node.js
* Express.js
* Render

### Database

* PostgreSQL
* Render PostgreSQL

## Project Structure

```bash
todo-fullstack-app/
│
├── controller/
├── model/
├── routes/
├── view/
│   ├── src/
│   └── public/
│
├── .env
├── .gitignore
├── index.js
└── README.md
```

## Installation

### 1. Clone repository

```bash
git clone https://github.com/iovtsyn/todo-fullstack-app.git
```

### 2. Navigate into project

```bash
cd todo-fullstack-app
```

### 3. Install backend dependencies

```bash
npm install
```

### 4. Install frontend dependencies

```bash
cd view
npm install
```

### 5. Configure backend environment variables

Create a `.env` file in the root folder:

```env
PORT=8000
DB_USER=postgres
DB_PASSWORD=YOUR_PASSWORD
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=todo
```

For production deployment, these environment variables are configured in Render.

### 6. Configure frontend environment variable

For local frontend development, create a `.env` file inside the `view` folder if needed:

```env
REACT_APP_API_URL=http://localhost:8000
```

For production deployment, this environment variable is configured in Vercel:

```env
REACT_APP_API_URL=https://todo-fullstack-api.onrender.com
```

### 7. Start backend server

From the root folder:

```bash
npm start
```

### 8. Start frontend

Open another terminal:

```bash
cd view
npm start
```

## Database Setup

Run the following SQL:

```sql
CREATE DATABASE todo;

CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

| Method | Endpoint                 | Description                      |
| ------ | ------------------------ | -------------------------------- |
| GET    | `/api/todos`             | Get all tasks                    |
| POST   | `/api/todo/create`       | Create a new task                |
| PUT    | `/api/todo/:id`          | Update a task                    |
| PATCH  | `/api/todo/:id/complete` | Mark task as completed or active |
| DELETE | `/api/todo/:id`          | Delete a task                    |

## Deployment

The application is deployed using:

* Frontend: Vercel
* Backend: Render Web Service
* Database: Render PostgreSQL

The frontend communicates with the backend using the `REACT_APP_API_URL` environment variable. The backend connects to PostgreSQL using environment variables stored securely in Render.

## Future Improvements

* Persist dark mode with localStorage
* Drag-and-drop task ordering
* Authentication
* User accounts
* Task priorities
* Improved mobile optimization
* Loading states and error messages

## Screenshots

(Add screenshots here later)

## Author

Built by Ilya Ovtsyn
