import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './features/exampleSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    // Add your reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
