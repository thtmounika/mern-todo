function TodoForm({
    task,
    setTask,
    addTodo
}) {

    return (
        <div>

            <input
                type="text"
                placeholder="Enter Todo"
                value={task}
                onChange={(e) =>
                    setTask(e.target.value)
                }
            />

            <button
                onClick={addTodo}
            >
                Add Todo
            </button>

        </div>
    );
}

export default TodoForm;