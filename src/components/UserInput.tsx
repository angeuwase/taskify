import { useState, useContext } from "react";
import { ToDoItem } from "../types/types";
import ToDoContext from "../state/context";
import { v4 as uuidv4 } from 'uuid';

const UserInput = ()=> {

    const { dispatch} = useContext(ToDoContext);

    const [toDo, setToDo] = useState<ToDoItem>({
        text: '',
        id: '',
        isDone: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): undefined => {
        const value = e.target.value;
        if(value){
            setToDo({...toDo, text:value})
        }
        return
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        dispatch({type:'ADD_TO_DO', payload:{...toDo, id: uuidv4() }})
        
        setToDo({
            text: '',
            id: '',
            isDone: false
        })
    }


    return (
        <form className="input" onSubmit={handleSubmit}>
            <input className="input-box" placeholder="Enter a task" value={toDo.text} onChange={handleChange} required />
            <button className="input-btn">Add</button>
        </form>
    )
}

export default UserInput;