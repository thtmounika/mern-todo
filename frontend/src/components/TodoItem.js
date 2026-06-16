function TodoItem({
    todo,
    toggleTodo,
    deleteTodo
}) {

    return (

        <li>

            <span
                style={{
                    textDecoration:
                        todo.completed
                            ? 'line-through'
                            : 'none'
                }}
            >
                {todo.task}
            </span>

            <button
                onClick={() =>
                    toggleTodo(todo._id)
                }
            >
                Complete
            </button>

            <button
                onClick={() =>
                    deleteTodo(todo._id)
                }
            >
                Delete
            </button>

        </li>

    );
}

export default TodoItem;