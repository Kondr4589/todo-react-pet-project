import Task from "./Task/Task";
import TodosCount from "./TodosCount";

const TodoList = ({todos, setTodos}) => {


    function isCompleted(id){
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }
    function removeTodo(id){
        setTodos([...todos].filter(t=> t.id !== id))
    }
    return (
        <div className='list'>
            {todos.map(todo => (
                    <Task key={todo.id} todo={todo} removeTodo={removeTodo} isCompleted={isCompleted}/>
                )
            )}
            <TodosCount todos={todos}/>
        </div>
    );
};

export default TodoList;