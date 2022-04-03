import { createSlice } from "@reduxjs/toolkit";

interface TodosState {
  todos: string[],
}

const todosInitialState: TodosState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    addTodo(state, action) {
      
    },
  },
})

export const { addTodo } = todosSlice.actions;