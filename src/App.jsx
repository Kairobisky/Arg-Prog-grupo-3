import React, { useState } from 'react'
import './App.css'

import {TaskForm, TaskList} from './components'

function App() {

  const [tasks, setTasks] = useState([])
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  console.log(tasks)

  return (
    <>
      <div className='container'>
        <h1>To-do List</h1>
        <TaskForm addTask= {addTask} />
        <TaskList task={tasks} />
      </div> 
    </>
  )
}

export default App
