import React from "react";
import './TaskItem.css'

const TaskItem = ({task, index, handleToggleCompleted, deleteTask}) => {

    return (
        <div className="item" >
            <button className=
            {task.completed 
            ? "btnStateCompleted" 
            : "btnStateNotCompleted"} onClick={() => {handleToggleCompleted(index)}} >  </button>
            <p className={task.completed 
            ? 'completed' 
            : 'incompleted' } > {task.title} </p>
            <span className="itemDate" > {task.date} </span>
            <button className="delete" onClick={() => deleteTask(task.id)} > x </button>
        </div>
    )
}

export default TaskItem