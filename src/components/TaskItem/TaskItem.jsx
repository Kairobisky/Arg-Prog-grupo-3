import React from "react";
import './TaskItem.css'

const TaskItem = ({task, index, handleToggleCompleted}) => {

    return (
        <div>
            <h3 className={task.completed 
            ? 'completed' 
        : '' } > {task.title} </h3>
            <span> {task.date} </span>
            <button> x </button>
            <button onClick={() => {handleToggleCompleted(index)}} >completada</button>
        </div>
    )
}

export default TaskItem