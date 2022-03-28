import { useContext } from "react";
import ToDoContext from "../state/context";
import TaskCard from "./TaskCard";

const ActiveTasks = ()=> {

    const {state, dispatch} = useContext(ToDoContext);

    const notDone = state.filter(todo => !todo.isDone )
    
    return (
        <div className='todo-card'>
            <h2 className="section-header">To Do</h2>
            <ul>
            {notDone.map(task => <li key={task.id}><TaskCard task={task} dispatch={dispatch} /></li>)}

            </ul>
            
          
        </div>
    )
}

export default ActiveTasks;