import React from "react";
import "./TaskSearch.css";

const TaskSearch = ({ handleChange, form }) => {
  return (
    <>
      <input
        className="buscador"
        placeholder="Buscar tarea por titulo"
        name="filterTask"
        onChange={handleChange}
        value={form.filterTask}
      />

      <label htmlFor="T">Todos</label>
      <input
        type="radio"
        checked={form.taskStateFilter === "T"}
        onChange={handleChange}
        name="taskStateFilter"
        id="T"
      />

      <label htmlFor="C">Completado</label>
      <input
        type="radio"
        checked={form.taskStateFilter === "C"}
        onChange={handleChange}
        name="taskStateFilter"
        id="C"
      />
      <label htmlFor="I">Incompletado</label>
      <input
        type="radio"
        checked={form.taskStateFilter === "I"}
        onChange={handleChange}
        name="taskStateFilter"
        id="I"
      />
    </>
  );
};

export default TaskSearch;
