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
  })



  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task.title}
        name='title' type="text"
        placeholder='title'
        onChange={handleChange} />
      <textarea
        value={task.description}
        name="description"
        placeholder='description'
        onChange={handleChange}>

      </textarea>
      <button>Save</button>
    </form>
  )
}

export default TaskForm
