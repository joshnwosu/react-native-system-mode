import { createSlice } from "@reduxjs/toolkit";

let id = 0;

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos_list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos_list = [
        ...state.todos_list,
        { id: ++id, task: action.payload.task },
      ];
    },
    deleteTodo: (state, action) => {
      state.todos_list = [
        ...state.todos_list.filter((todo) => todo.id != action.payload),
      ];
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todos_list;

export default todoSlice.reducer;
