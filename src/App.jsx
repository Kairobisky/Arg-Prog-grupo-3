import React, { useEffect, useState } from 'react'
import './App.css'

import {TaskForm, TaskList} from './components'

function App() {

  // Añadir Tareas
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

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
  /*  const [filteredTask, setFilteredTask] = ([]) 
  
  const handleSearchTask = (searchString) => {
    const filtered = tasks.filter(task =>
      task.title.toLowerCase().includes(searchString.toLowerCase())
      )
      setFilteredTask(filtered)
    };
    */
   const [searchString, setSearchString] = useState('')
   const [currentTasks, setCurrentTask] = useState([])
   
   useEffect(()=>{
     console.log('detecte un cambio')
     setCurrentTask(tasks.filter(task => 
      task.title.toLowerCase().includes(searchString.toLowerCase()) 
      ))
    }, [searchString, tasks])
    
    const handleChangeSearchString = (e) =>{
      setSearchString(e.target.value)
    }
    
    // Guardar datos
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks] )
  //   const saveTasksToLocalStorage = (updatedTasks) => {
  //   localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  //   setTasks(updatedTasks);
  // };

console.log(tasks)
  return (
    <>
      <div className='container'>
        <h1>To-do List</h1>
        <TaskForm addTask= {addTask} />
        <h2>Buscar Tareas</h2>
        <input className='buscador'
        placeholder='Ingresa algo para filtrar' 
        onChange={handleChangeSearchString}
        value={searchString}
        />
        <TaskList tasks={currentTasks} handleToggleCompleted={handleToggleCompleted} deleteTask={deleteTask} />
      </div> 
    </>
  )
}

export default App
