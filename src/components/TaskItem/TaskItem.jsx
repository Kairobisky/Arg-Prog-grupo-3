import React from "react";
import './TaskItem.css'

const TaskItem = ({task}) => {
    return (
        <div>
            <h3> {task.title} </h3>
            <span> {task.date} </span>
            <button> x </button>
        </div>
    )
}

export default TaskItem