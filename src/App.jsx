import React, { useState } from 'react'
import './App.css'
import {TaskForm, TaskList} from './components'

function App() {
  const [tasks, setTask] = useState([])

  const addTask = (newTask) => {
    setTask([tasks, newTask])
  }

  const [showTask, setShowTask] = useState([])

  console.log(tasks)
  return (
    <>
      <div className='container'>
        <h1>To-do List</h1>
        <TaskForm addTask= {addTask} />
        <TaskList task={showTask} />
      </div> 
    </>
  )
}

export default App
