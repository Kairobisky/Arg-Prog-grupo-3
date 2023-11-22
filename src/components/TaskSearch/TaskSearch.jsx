import React, { useState } from "react";
import './TaskSearch.css'

const TaskSearch = ({tasks, onSearch}) => {

    const [searchString, setSearchString] = useState('')

    const handleInputChange = (e) => {
        setSearchString(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(searchString.trim())
    }

    return (
        <form onSubmit={handleSubmit} className='searchBox' >
          <input value={searchString} onChange={handleInputChange} placeholder='Ingrese la tarea a buscar.' />
          <button type="submit">Buscar</button>
        </form>
    )
}

export default TaskSearch