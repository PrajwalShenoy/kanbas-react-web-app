import { useSelector, useDispatch } from "react-redux";
import { setTodo, deleteTodo } from "./todosReducer";

function TodoItem({ todo }) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            <button className="btn btn-primary me-2" onClick={() => dispatch(setTodo(todo))}>
                Edit </button>
            <button className="btn btn-danger me-2" onClick={() => dispatch(deleteTodo(todo))}>
                Delete </button>
            {todo.title}
        </li>
    );
}

export default TodoItem;