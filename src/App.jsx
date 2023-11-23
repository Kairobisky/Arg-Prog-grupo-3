import React, { useEffect, useState } from "react";
import "./App.css";

import { TaskForm, TaskList, TaskSearch } from "./components";

function App() {
  const [form, setForm] = useState({
    addTask: "",
    filters: false,
    filterTask: "",
    taskStateFilter: "T",
  });

  // Añadir Tareas
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addNewTask = (e) => {
    e.preventDefault();
    const { title } = e.target;
    if (title.value === "") {
      alert("No agrego ninguna tarea");
    } else {
      const newTask = {
        completed: false,
        title: title.value,
        id: Math.random() + "Tarea",
        date: new Date().toLocaleString(),
      };
      setTasks([...tasks, newTask]);
    }
    setForm((prev) => ({ ...prev, addTask: "" }));
  };

  // Borrar tareas
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id != taskId));
  };

  // Marcar tareas como Completadas
  const handleToggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: !updatedTasks[index].completed,
    };
    setTasks(updatedTasks);
  };

  // Buscador de tareas
  const [currentTasks, setCurrentTask] = useState([]);

  useEffect(() => {
    setForm((prev) => {
      return { ...prev, taskStateFilter: "T", filterTask: "" };
    });
  }, [form.filters]);

  useEffect(() => {
    if (form.taskStateFilter === "C") {
      setCurrentTask(
        tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(form.filterTask.toLowerCase()) &&
            task.completed
        )
      );
    } else if (form.taskStateFilter === "I") {
      setCurrentTask(
        tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(form.filterTask.toLowerCase()) &&
            !task.completed
        )
      );
    } else {
      setCurrentTask(
        tasks.filter((task) =>
          task.title.toLowerCase().includes(form.filterTask.toLowerCase())
        )
      );
    }
  }, [form.filterTask, form.taskStateFilter, tasks]);

  console.log(currentTasks);

  //
  const handleChange = (e) => {
    const { name, id, type, value, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "radio") {
      setForm((prev) => ({ ...prev, [name]: id }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Guardar datos
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="container">
        <h1>To-do List</h1>
        <TaskForm
          addNewTask={addNewTask}
          handleChange={handleChange}
          form={form}
        />
        {form.filters && (
          <>
            <h2>Filtros</h2>
            <TaskSearch handleChange={handleChange} form={form} />
          </>
        )}

        <TaskList
          tasks={currentTasks}
          handleToggleCompleted={handleToggleCompleted}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
}

export default App;
