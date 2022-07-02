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
            <div className='grid grid cols-3 gap-4  '>

                {tasks.map(task => (
                    <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
                        <header className='flex justify-between'>
                            <h3>{task.title}</h3>
                            <div className='flex gap-x-2 '>
                                <button className='bg-red-500 px-2 py-1 text-xs rounded-md self-center 'onClick={() => handleDelete(task.id)}>Delete</button>
                                <Link 
                                    className='bg-zinc-600 px-2 py-1 text-xs rounded-md'
                                    to={`/edit/${task.id}`}>Editar</Link>
                            </div>

                        </header>

                        <h4>{task.description}</h4>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default TaskList
