import { createSlice } from '@reduxjs/toolkit';
import { createUser } from './authOperations';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    isAuth: false,
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(createUser.pending, state => {
      state.error = '';
      state.isLoading = true;
    });

    builder.addCase(createUser.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isAuth = true;
      state.isLoading = false;
      state.email = action.payload;
    });
  },
});
