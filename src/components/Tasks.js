import { useState } from 'react';
import { fetchAll } from '../services/getData'
import Task from "./Task";

const Tasks = () => {
    const [tasks, setTasks] = useState(fetchAll()); 
    
    return (
        <div>
            {
                tasks.map( task => <Task key = { task.id } title = { task.title } description = { task.description } />)
            }
        </div>
    )
}
export default Tasks;
