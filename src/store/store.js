import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter.slice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})