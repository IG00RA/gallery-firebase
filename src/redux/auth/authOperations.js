import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase/config';

export const createUser = createAsyncThunk(
  'auth/createUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return response.user.email;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
