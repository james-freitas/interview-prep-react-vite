import { useState } from 'react'
import './App.css'

interface Task {
  id: number
  title: string,
  url: string,
  completed: boolean
}

function App() {

  const [javaTasks, setJavaTasks] = useState<Task[]>([
    { id: 1, title: 'Streams', url: "https://www.oracle.com/br/technical-resources/articles/java-stream-api.html", completed: false },
    { id: 2, title: 'Lambdas', url: "https://rinaldo.dev/java-8-entenda-facilmente-funcoes-lambda-a-principal-novidade/", completed: false },
    { id: 3, title: 'Optional', url: "https://www.baeldung.com/java-optional", completed: false }
  ])

  const toggleJavaTask = (id: number) => {
    setJavaTasks(
      javaTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    
    <div>
      <div>
        <h1>Task List</h1>
        <ul>
          {javaTasks.map((task) => (
            <li
              key={task.id}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleJavaTask(task.id)}                
              />
              <span className={`text-lg ${task.completed ? "completed" : ""}`}>
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  )
}

export default App
