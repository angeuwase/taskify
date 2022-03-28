import TaskCard from "./TaskCard";
import './styles.css'
import { useContext } from "react";
import ToDoContext from "../state/context";

const CompletedTasks = ()=> {

    const {state, dispatch} = useContext(ToDoContext);

    const done = state.filter(todo => todo.isDone )


    return (
        <div className='completed-card'>
            <h2 className="section-header">Done</h2>

            <ul>
            {done.map(item => <li key={item.id}><TaskCard task={item} dispatch={dispatch} /></li>)}

            </ul>
            
          
        </div>
    )
}

export default CompletedTasks;