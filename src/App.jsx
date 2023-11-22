import React, { useEffect, useState } from 'react'
import './App.css'

import {TaskForm, TaskList, TaskSearch} from './components'

function App() {

  // Añadir Tareas
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
      setTasks([...tasks, newTask])
    }

  // Borrar tareas
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  // Marcar tareas como Completadas
  const handleToggleCompleted = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index] = {...updatedTasks[index], completed: !updatedTasks[index].completed}
    setTasks(updatedTasks)
}

  // Buscador de tareas
  const [filteredTask, setFilteredTask] = ([])

  const handleSearchTask = (searchString) => {
    const filtered = tasks.filter(task =>
      task.title.toLowerCase().includes(searchString.toLowerCase())
      )
      setFilteredTask(filtered)
  };

console.log(tasks)
  return (
    <>
      <div className='container'>
        <h1>To-do List</h1>
        <TaskForm addTask= {addTask} />
        <h2>Buscar Tareas</h2>
        <TaskSearch tasks={tasks} onSearch={handleSearchTask} />
        <TaskList tasks={tasks} handleToggleCompleted={handleToggleCompleted} deleteTask={deleteTask} />
      </div> 
    </>
  )
}

export default App
