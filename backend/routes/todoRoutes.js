const express = require('express');
const router = express.Router();

const Todo =
    require('../models/Todo');

router.get('/', async (req, res) => {

    const todos =
        await Todo.find();

    res.json(todos);

});

router.post('/', async (req, res) => {

    const todo =
        await Todo.create({

            task:
                req.body.task

        });

    res.status(201).json(todo);

});

router.put('/:id', async (req, res) => {

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

});

router.delete('/:id', async (req, res) => {

    await Todo.findByIdAndDelete(
        req.params.id
    );

    res.json({

        message:
            'Todo Deleted'

    });

});

module.exports = router;