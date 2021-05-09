import React from 'react'

const Task = ({ title , description}) => {
    return (
        <div className = 'card'>
            <label>Title:</label>
                { title } <br/>
            <label> Description:</label>
                { description }<br/>
        </div>
    )
}

export default Task
