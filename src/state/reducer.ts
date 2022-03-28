import { ToDoItem, Action, AppConstants } from "../types/types"

const ToDoReducer = (state: ToDoItem[], action: Action): ToDoItem[]=>{

    switch(action.type){
        case AppConstants.create:
            return [
                ...state,
                { id: action.payload.id,
                text: action.payload.text,
                 isDone: false}
                ]

        case AppConstants.set:
            return action.payload.state;
              
              

        
        case AppConstants.done:
            const doneTask = state.filter(todo => todo.id === action.payload.id)[0];
            return [
                ...state.filter(todo => todo.id !== action.payload.id),
                { ...doneTask, isDone: true}
                ]

        case AppConstants.delete:
            return[
                ...state.filter(todo => todo.id !== action.payload.id),
              ]
        default:
            return state
    }
    
}

export default ToDoReducer;