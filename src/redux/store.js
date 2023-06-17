import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlise';

export const store = configureStore({
  reducer: {
    gallery: null,
    auth: authSlice.reducer,
  },
});
