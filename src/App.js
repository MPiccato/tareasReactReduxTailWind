import React from 'react'

import { useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<TaskList />}/>
          <Route path='/add' element ={<TaskForm />}/>
          <Route path='/edit/:id' element ={<TaskForm />}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
