import React, {useState} from 'react';
import './TodosCount.css'
const TodosCount = ({todos}) => {
    return (
        <div className='counter'>
            <div className="counter__item">
                {todos.length}  Items
            </div>
        </div>
    );
};

export default TodosCount;