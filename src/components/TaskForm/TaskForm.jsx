import React from "react";
import "./TaskForm.css";

const TaskForm = ({ addNewTask, handleChange, form }) => {
  return (
    <div>
      <form className="formAddTasks" onSubmit={addNewTask}>
        <input
          id="title"
          name="addTask"
          placeholder="Agrega una nueva tarea."
          onChange={handleChange}
          value={form.addTask}
        />
        <button type="submit">Agregar</button>
      </form>
      <input
        type="checkbox"
        checked={form.filters}
        name="filters"
        id="filters"
        onChange={handleChange}
      />
      <label htmlFor="filters">Filtros</label>
    </div>
  );
};

export default TaskForm;
