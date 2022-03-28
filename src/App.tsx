import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import ActiveTasks from './components/ActiveTasks';
import CompletedTasks from './components/CompletedTasks';
import Header from './components/Header';
import ToDoContext from './state/context';
import ToDoReducer from './state/reducer'
import {ToDoItem} from './types/types'

function App() {

  const initialState: ToDoItem[] =[]


  const [state, dispatch] = useReducer(ToDoReducer, initialState)

  const key = 'appStorage';

  useEffect(()=> {
    const storedData = localStorage.getItem(key);

    if(storedData){
      dispatch({type: 'SET_STATE', payload:{state: JSON.parse(storedData)}})
    }


  }, [])

  useEffect(()=> {

    localStorage.setItem(key, JSON.stringify(state))


  }, [state])

  return (
    <div className="App">
       <ToDoContext.Provider value={{state, dispatch}}>
      <Header />
     
      <div className='row'>
          <div className='column'>
            <ActiveTasks />

          </div>
          <div className='column'>
            <CompletedTasks />

          </div>
          
          
        </div>

      </ToDoContext.Provider>

   


  
    </div>
  );
}

export default App;
