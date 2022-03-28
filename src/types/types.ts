export interface ToDoItem {
    text: string;
    id: string;
    isDone: boolean
}

export type Action =
| { type: 'ADD_TO_DO', payload: {text: string, id: string, isDone: boolean}}
| { type: 'DELETE_TO_DO', payload: {id: string}}
| { type: 'SET_STATE', payload: {state:ToDoItem[]}}
| { type: 'MARK_AS_DONE', payload: {id: string}}

export type Dispatch = (action: Action) => void;


export interface TDContext {
    state: ToDoItem[];
    dispatch: Dispatch;
  }


export enum AppConstants{
    create = 'ADD_TO_DO',
    delete = 'DELETE_TO_DO',
    set = 'SET_STATE',
    done = 'MARK_AS_DONE'

}