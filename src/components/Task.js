import React from 'react'
import { FaRegTimesCircle } from "react-icons/fa";
import db from "../services/firebase";

const Task = ({ title , description}) => {
     
    const handleClick = () => {
        deleteTask(title);
    }
    const deleteTask = async(title) => {
        try {
            const response = db
                                .collection('tasks')
                                .where('title', '==', title)
            const data = await response.get();
            const doc = data.docs[0];
            doc.ref.delete();
        } catch (err) {
            console.log(err);
        }
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