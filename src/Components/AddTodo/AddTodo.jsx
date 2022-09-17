import React from 'react';
import './AddTodo.css'
import {useState} from "react";
import arrow from '../../assets/Arrow.svg'

const AddTodo = ({addTodo}) => {
    const [todo, setTodo] = useState('');
    return (
        <div className='addTodo'>
            <input className='addTodo__input'
                   type='text'
                   placeholder='Create a new todo...'
                   onChange={e=> setTodo(e.target.value)}
            />
            <div className='addTodo__btn' onClick={() => addTodo(todo)}>
                <img className='arrow' src={arrow} alt="arrow"/>
            </div>
        </div>

    );
};

export default AddTodo;