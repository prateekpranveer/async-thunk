// store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './userSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
