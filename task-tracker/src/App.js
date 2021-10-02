import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"

function App() {
  //set default component sate

  const [showAddTask, setShowAddTask] = useState(false)

  //use set tasks to alter state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Assignment 1',
      day: 'October 3rd at 2.40pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Presentation',
      day: 'October 24th at 12.40pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Appointment',
      day: 'October 15th at 5.40pm',
      reminder: false
    },
  ])

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //delete Task
  const deleteTask = (id) => {

    //filter returns tasks with ids which don't match the delete id
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    //this stuff looks like HTML but it is actually JSX
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}

      {/* if length of task > 0 we can delete tasks, 
      otherwise say no tasks to show (if else using ternary operator,
      because we are writing jsx not javascript dummy */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />)
        : ('No tasks to show')}
    </div>
  );
}

export default App;
