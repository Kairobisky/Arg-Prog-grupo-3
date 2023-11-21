import React from "react";
import './TaskForm.css'

const TaskForm = ({addTask}) => {
    const addNewTaks = (e) => {
        e.preventDefault()
        const {title} = e.target
        if (title.value) {
            addTask({
                title: title.value,
                id: Math.random(),
                createAt: new Date().toLocaleString()
            })
        }
    }
    return (
        <div>
            <form className="formAddTasks" onSubmit={addNewTaks} >
                <input id="title" name="title" placeholder="Agrega una nueva tarea." />
                <button type="submit" >Agregar</button>
            </form>
        </div>
    )
}

export default TaskForm