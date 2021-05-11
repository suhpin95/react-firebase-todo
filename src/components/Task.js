import React from 'react'
import { FaRegTimesCircle } from "react-icons/fa";

const Task = ({ title , description, id }) => {
     
    const handleClick = () => {
        console.log(id)
    }
    
    return (
        <div className = 'card'>
            <FaRegTimesCircle id = 'deleteBtn' onClick = { handleClick }></FaRegTimesCircle>
            <label>Title:</label>
                { title } <br/>
            <label> Description:</label>
                { description }<br/>
        </div>
    )
}

export default Task
