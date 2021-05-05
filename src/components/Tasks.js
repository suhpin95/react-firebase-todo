import { getAll } from "../services/getData";

const Tasks = () => {
    const temp = getAll();
    console.log(temp)
    return (
        <div>
            Hello from Tasks            
        </div>
    )
}
export default Tasks;
