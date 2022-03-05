import { createAction, handleActions } from "redux-actions";

const CHECKED = "CHECKED";
const INSERT = "INSERT";
const REMOVE = "REMOVE";

export const checked = createAction(CHECKED, (id) => id);

let id = 0;
export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    checked: false,
}));
export const remove = createAction(REMOVE, (id) => id);

const initalState = {
    todolist: [],
};

const todo = handleActions(
    {
        [INSERT]: (state, action) => ({
            ...state,
            todolist: state.todolist.concat(action.payload),
        }),

        [REMOVE]: (state, action) => ({
            ...state,
            todolist: state.todolist.filter(
                (todo) => todo.id !== action.payload
            ),
        }),
    },
    initalState
);

export default todo;
