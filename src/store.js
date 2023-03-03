import { configureStore } from '@reduxjs/toolkit';
import authReducer from './actions/authSlice';
import layoutReducer from './actions/layoutSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer
  },
});