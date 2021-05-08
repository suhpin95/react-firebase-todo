import React from 'react'

const Task = ({ title , description}) => {
    return (
        <div className = 'card'>
            <label>Title:</label><br/>
                { title }<br/>
            <label> Description:</label><br/>
                { description }
            <br/>
        </div>
    )
}

export default Task
