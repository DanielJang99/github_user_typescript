import { createReducer } from "typesafe-actions";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
import { TodosState, TodosAction } from "./types";

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) =>
        state.concat({
            ...action.payload, // id, text 를 이 안에 넣기
            done: false,
        }),
    [TOGGLE_TODO]: (state, { payload: id }) =>
        state.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ),
    [REMOVE_TODO]: (state, { payload: id }) =>
        state.filter((todo) => todo.id !== id),
});

export default todos;