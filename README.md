# MERN TODO Application

A full-stack Todo Management application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This application allows users to create, update, delete, and manage their daily tasks efficiently.

## Features

* Add new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Mark tasks as completed
* Responsive user interface
* REST API integration
* MongoDB database storage

## Tech Stack

### Frontend

* React.js
* Axios
* CSS3
* React Hooks (useState, useEffect)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

## Project Structure

```text
MERN-TODO/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/MERN-TODO.git
```

### Navigate to Project

```bash
cd MERN-TODO
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Run Backend

```bash
npm start
```

## Run Frontend

```bash
npm run dev
```

## API Endpoints

### Get All Tasks

```http
GET /api/todos
```

### Create Task

```http
POST /api/todos
```

### Update Task

```http
PUT /api/todos/:id
```

### Delete Task

```http
DELETE /api/todos/:id
```

## Learning Outcomes

* React Components
* React Hooks
* Axios API Calls
* REST APIs
* Node.js & Express.js
* MongoDB CRUD Operations
* State Management
* Full Stack Development

## Future Enhancements

* User Authentication (JWT)
* Task Categories
* Search Functionality
* Due Dates
* Dark Mode
* Task Priority Levels

## Author

Developed as a MERN Stack learning project.
