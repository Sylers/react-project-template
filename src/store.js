import { configureStore } from '@reduxjs/toolkit';
import authReducer from './actions/auth/authSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});