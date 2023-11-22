import React, { useEffect, useState } from 'react'
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

  const handleToggleCompleted = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index] = {...updatedTasks[index], completed: !updatedTasks[index].completed}
    setTasks(updatedTasks)
}

console.log(tasks)
  return (
    <>
      <div className='container'>
        <h1>To-do List</h1>
        <TaskForm addTask= {addTask} />
        <TaskList tasks={tasks} handleToggleCompleted={handleToggleCompleted} />
      </div> 
    </>
  )
}

export default App
