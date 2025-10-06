import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tile from "./components/Tile.jsx";
import Card from "./components/Card.jsx";
import Counter2 from "./components/Counter2.jsx";
import Counter3 from "./components/Counter3.jsx";

function App() {
  const [count, setCount] = useState(5);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);



  // Add a new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4 text-center" style={{ backgroundColor: "pink", height: "800px", width: "600px" }}>
      <h1 className="mt-3">To-Do List</h1>

      {/* Input and add button */}
      <div className="mt-3">
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control mb-2"
          style={{ maxWidth: "300px", margin: "0 auto" }}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task list and delete button*/}
      <ul className="list-group mt-3" style={{ maxWidth: "300px", margin: "0 auto" }}>
        {tasks.map((t, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {t}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
              x
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h2>Vite + React</h2>
        <button className="btn btn-secondary" onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
      </div>

      <Counter2 />
      <Counter3 />
    </div>
  );
}

export default App;
