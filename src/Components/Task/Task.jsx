import React from 'react';
import './Task.css'
import check from '../../assets/Check.png'

const Task = ({todo,removeTodo,isCompleted}) => {
    return (
        <div className='task'>
            <div className='check'
                onClick={()=>isCompleted(todo.id)}
            >
                {todo.isCompleted &&
                    <img className='check__img active' src={check} alt=""/>
                }
            </div>
            <div className='task__content'>
                <div className={`task__text ${todo.isCompleted ? ' active' : ''}`}>{todo.task} </div>
                <button className='task__btn' onClick={() => removeTodo(todo.id)}>Удалить</button>
            </div>
        </div>
    );
};

export default Task;