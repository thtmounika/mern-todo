require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Todo = require('./models/Todo');

const app = express();
console.log(process.env.DATABASE_URI);
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.DATABASE_URI)
    .then(() => {

        console.log('MongoDB Connected');

        app.listen(
            process.env.PORT || 3500,
            () => {
                console.log(
                    `Server Running on Port ${process.env.PORT || 3500}`
                );
            }
        );

    })
    .catch((err) => {

        console.error(
            'MongoDB Connection Error:',
            err.message
        );

    });

// Home Route
app.get('/', (req, res) => {

    res.send(
        'MERN Todo API Running'
    );

});

// Get All Todos
app.get('/todos', async (req, res) => {

    try {

        const todos =
            await Todo.find();

        res.json(todos);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// Add Todo
app.post('/todos', async (req, res) => {

    try {

        const { task } =
            req.body;

        if (!task) {

            return res.status(400)
                .json({
                    message:
                        'Task is required'
                });

        }

        const todo =
            await Todo.create({
                task
            });

        res.status(201)
            .json(todo);

    } catch (err) {

        res.status(500)
            .json({
                message:
                    err.message
            });

    }

});

// Toggle Complete
app.put('/todos/:id', async (req, res) => {

    try {

        const todo =
            await Todo.findById(
                req.params.id
            );

        if (!todo) {

            return res.status(404)
                .json({
                    message:
                        'Todo not found'
                });

        }

        todo.completed =
            !todo.completed;

        await todo.save();

        res.json(todo);

    } catch (err) {

        res.status(500)
            .json({
                message:
                    err.message
            });

    }

});

// Delete Todo
app.delete('/todos/:id', async (req, res) => {

    try {

        await Todo.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:
                'Todo deleted'
        });

    } catch (err) {

        res.status(500)
            .json({
                message:
                    err.message
            });

    }

});