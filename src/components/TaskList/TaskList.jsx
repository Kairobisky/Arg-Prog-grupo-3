import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import './TaskList.css'

const TaskList = ({tasks, handleToggleCompleted, deleteTask}) => {

    return (
        <div className="boxList" >
            <h2>Tareas:</h2>
            {
                tasks.length === 0
                ? <h3>Todavia no hay tareas!</h3>
                : <div>
                    {tasks.map((task, index) => (
                    <TaskItem handleToggleCompleted={handleToggleCompleted} 
                    index={index} 
                    task={task} 
                    key={task.id} 
                    deleteTask={deleteTask} />
                ))}
                </div> 
            }
        </div>
    )
}

export default TaskList