import './App.css';
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo/AddTodo";
import React, {useState} from "react";
const data = [
    {
        id: 'Wo13',
        task: 'Написать проект прогноза погоды',
        isCompleted: false,
    },
    {
        id: 'Lls2',
        task: 'Помочь другу',
        isCompleted: false,
    },
    {
        id: 'FgGh',
        task: 'Поиграть',
        isCompleted: false,
    },
]
function App() {
    const [todos, setTodos] = useState(data);
    function addTodo(todo) {
        setTodos([...todos, {
            id: new Date(),
            task: todo,
            isCompleted: false
        }
        ])
    }
    return (
    <div className="app">
        <div className="wrapper">
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    </div>
  );
}

export default App;
