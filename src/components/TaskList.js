import React from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div className='w-4/6'>
            <header className='flex justify-between items-center py-4'>
                <h2>Tareas totales: {tasks.length} </h2>
                <Link 
                    to='/add'
                    className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'
                >
                        Agregar tarea
                </Link>
            </header>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <h4>{task.description}</h4>
                    <button onClick={()=>handleDelete(task.id)}>Delete</button>
                    <Link to={`/edit/${task.id}`}>Editar</Link>
                </div>
            ))}
        </div>
    )
}

export default TaskList
