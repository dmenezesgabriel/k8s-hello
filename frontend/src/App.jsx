// src/App.jsx
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async () => {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task, completed }),
    });
    fetchTodos();
    // Clear the input fields after adding a todo
    setTask("");
    setCompleted(false);
  };

  return (
    <div>
      <h1>Todo List App</h1>

      <div>
        <label>Task:</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Completed:</label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </div>

      <button onClick={addTodo}>Add Todo</button>

      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <strong>Task:</strong> {todo.task}, <strong>Completed:</strong>{" "}
            {todo.completed ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
