# TaskFlow - Full-Stack Task Manager

A full-stack task management application built with React, Express, Node.js, and PostgreSQL.

## Features

- Create tasks
- Edit tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks:
  - All
  - Active
  - Completed
- Dark mode
- Task timestamps
- Responsive modern UI
- PostgreSQL database persistence
- MVC backend architecture

## Tech Stack

### Frontend

- React
- JavaScript
- CSS

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL

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

### 5. Configure environment variables

Create `.env` file in root folder:

```env
PORT=8000
DB_USER=postgres
DB_PASSWORD=YOUR_PASSWORD
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=todo
```

### 6. Start backend server

```bash
npm start
```

### 7. Start frontend

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

## Future Improvements

- Persist dark mode with localStorage
- Drag-and-drop task ordering
- Authentication
- User accounts
- Task priorities
- Mobile optimization
- Deployment

## Screenshots

(Add screenshots here later)

## Author

Built by Ilya Ovtsyn
