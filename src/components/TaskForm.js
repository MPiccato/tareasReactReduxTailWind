import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';


const TaskForm = () => {

  //Creo un estado para almacenar el valor del input
  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({
        ...task,
        id: uuid(),
      }));
    };
    navigate('/');
  };

  useEffect(() => {
    if (params.id) {
      const task = tasks.find(task => task.id === params.id);
      setTask(task);
    }
  }, [params.id, tasks]);



  return (
    <form
      onSubmit={handleSubmit}
      className='bg-zinc-800 max-w-sm p-4'
    >
      <label
        htmlFor="title"
        className='block text-sm font-bold mb-2'
      >Tarea</label>
      <input
        className='w-full p-2 rounded-md bg-zinc-600 mb-2'
        value={task.title}
        name='title' type="text"
        placeholder='title'
        onChange={handleChange} />
      <label
        htmlFor="description"
        className='block text-sm font-bold mb-2'
      >
        Descripción
      </label>
      <textarea
        value={task.description}
        name="description"
        placeholder='description'
        onChange={handleChange}
        className='w-full p-2 rounded-md bg-zinc-600 mb-2'
        >
        
      </textarea>
      <button className='bg-indigo-600 px-2 py-1'>Save</button>
    </form>
  )
}

export default TaskForm
