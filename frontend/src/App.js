import { useState, useEffect } from 'react';

import axios from './api/axios';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

    const [task, setTask] =
        useState('');

    const [todos, setTodos] =
        useState([]);

    const fetchTodos =
        async () => {

            try {

                const response =
                    await axios.get(
                        '/todos'
                    );

                setTodos(
                    response.data
                );

            } catch (err) {

                console.log(err);

            }

        };

    useEffect(() => {

        fetchTodos();

    }, []);

    const addTodo =
        async () => {

            if (!task)
                return;

            try {

                await axios.post(
                    '/todos',
                    { task }
                );

                setTask('');

                fetchTodos();

            } catch (err) {

                console.log(err);

            }

        };

    const toggleTodo =
        async (id) => {

            try {

                await axios.put(
                    `/todos/${id}`
                );

                fetchTodos();

            } catch (err) {

                console.log(err);

            }

        };

    const deleteTodo =
        async (id) => {

            try {

                await axios.delete(
                    `/todos/${id}`
                );

                fetchTodos();

            } catch (err) {

                console.log(err);

            }

        };

    return (

        <div className="App">

            <h1>
                MERN Todo App
            </h1>

            <TodoForm
                task={task}
                setTask={setTask}
                addTodo={addTodo}
            />

            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />

        </div>

    );

}

export default App;
