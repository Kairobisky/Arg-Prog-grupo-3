import React from "react";
import './TaskItem.css'

const TaskItem = ({task, index, handleToggleCompleted, deleteTask}) => {

    return (
        <div className="item" >
            <button className="btnStateCompleted" onClick={() => {handleToggleCompleted(index)}} > C </button>
            <h3 className={task.completed 
            ? 'completed' 
            : 'incompleted' } > {task.title} </h3>
            <span className="itemDate" > {task.date} </span>
            <button className="delete" onClick={() => deleteTask(task.id)} > x </button>
        </div>
    )
}

export default TaskItem