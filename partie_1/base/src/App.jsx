
import './App.css'

import { useState } from 'react'

function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  )
}

function FormulaireTask({ tasks, setTasks }) {
  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, { id: tasks.length + 1, name: task }]);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task NAME"
      />
      <button type="submit">Ajouter</button>
    </form>
  )
}

function ColorPicker() {
  const [color, setColor] = useState("red");

  return (
  <div>
    <input 
      type="color" 
      value={color} 
      onChange={(e) => setColor(e.target.value)} 
    />
    <div 
      style={{ backgroundColor: color, width: "200px", height: "200px", marginTop: "10px" }}
    />
  </div>
  )
}



function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "jouer" },
    { id: 2, name: "dormir" },
    { id: 3, name: "manger" },
  ])

  return (
    <div>
      <TodoList tasks={tasks} />
      <FormulaireTask tasks={tasks} setTasks={setTasks} />
      <ColorPicker />
    </div>
  )
}

export default App
