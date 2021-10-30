import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../interfaces/IUser';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {}
});

export default userSlice.reducer;