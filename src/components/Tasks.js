import { useEffect, useState } from 'react';
import db from "../services/firebase";
import Task from "./Task";

const Tasks = () => {
    const [tasks, setTasks] = useState([]); 
    const fetchedTasks = [];

    const getTasks = async()=>{      
        const response = db.collection('tasks')
        const data = await response.get();
                    data.docs
                    .forEach(doc => {
                        const fetchedDoc = {
                            ...doc.data()
                        }
                        fetchedTasks.push(fetchedDoc);
                    }) 
        setTasks(fetchedTasks)
    }
    useEffect(()=>{
        getTasks();
    },[tasks])
    return (
        <div>
            {
                tasks.map( task => <Task key = { task.id } title = { task.title } description = { task.description } id = { task.id }/>)
            }
        </div>
    )
}
export default Tasks;
