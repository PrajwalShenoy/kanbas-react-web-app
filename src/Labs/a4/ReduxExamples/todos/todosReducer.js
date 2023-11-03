import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: "1", title: "Learn React"},
        { id: "2", title: "Learn Redux"}
    ],
    todo: { title: "Learn Mongo" },
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const newTodos = [
                ...state.todos,
                {
                    ...action.payload,
                    id: new Date().getTime().toString(),
                },
            ];
            state.todos = newTodos;
            state.todo = { title: "" };
        },
        deleteTodo: (state, action) => {
            const newTodos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            )
            state.todos = newTodos;
        },
        updateTodo: (state, action) => {
            const newTodos = state.todos.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
            state.todos = newTodos;
            state.todo = { title: "" };
        },
        setTodo: (state, action) => {
            state.todo = action.payload;
        }
    }
});

export const { addToDo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;