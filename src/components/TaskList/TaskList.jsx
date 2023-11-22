import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({tasks, handleToggleCompleted, deleteTask}) => {

    return (
        <div>
            <h2>Tareas:</h2>
            {
                tasks.length === 0
                ? <h2>NO hay nada</h2>
                : <div>
                    {tasks.map((task, index) => (
                    <TaskItem handleToggleCompleted={handleToggleCompleted} index={index} task={task} key={task.id} deleteTask={deleteTask} />
                ))}
                </div> 
            }
        </div>
    )
}

export default TaskList