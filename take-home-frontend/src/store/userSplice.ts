import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type {IUserForm } from "../app/modalForms/addMember";
import type { IUser } from './types';

type operation = 'gets' | 'patch' | 'post' | 'delete';

interface IUsersState {
  loading: {
    delete: {
      isLoading?: boolean,
      isSucceeded?: boolean,
    },
    gets: {
      isLoading?: boolean,
      isSucceeded?: boolean,
    },
    patch: {
      isLoading?: boolean,
      isSucceeded?: boolean
    },
    post: {
      isLoading?: boolean,
      isSucceeded?: boolean,
    }
  },
  users: IUser[],
  lastModifiedId?: number;
}

const initialState: IUsersState = {
  loading: {
    delete: {
      isLoading: undefined,
      isSucceeded: undefined,
    },
    gets: {
      isLoading: undefined,
      isSucceeded: undefined,
    },
    patch: {
      isLoading: undefined,
      isSucceeded: undefined
    },
    post: {
      isLoading: undefined,
      isSucceeded: undefined
    },
  },
  users: [],
  lastModifiedId: undefined
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersRequest: (state) => {
      state.loading.gets.isLoading = true;
    },
    getUsersRequestSuccess: (state, action: PayloadAction<IUser[]>) => {
      state.loading.gets.isSucceeded = true;
      state.users = action.payload;
      state.loading.gets.isLoading = false;
    },
    getUsersRequestFailed: (state, action: PayloadAction<string>) => {
      state.loading.gets.isSucceeded = false;
      state.loading.gets.isLoading = false;
    },

    patchUserRequest: (state, action: PayloadAction<number>) => {
      state.loading.patch.isLoading = true;
    },
    patchUserRequestSuccess: (state, action: PayloadAction<IUser>) => {
      state.loading.patch.isLoading = false;
      state.loading.patch.isSucceeded = true;
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
        state.lastModifiedId = action.payload.id;
      }
    },
    patchUserRequestFailed: (state, action: PayloadAction<string>) => {
      state.loading.patch.isSucceeded = false;
      state.loading.patch.isLoading = false;
    },

    addUserRequest: (state, action: PayloadAction<IUserForm>) => {
      state.loading.post.isLoading = true;
    },
    addUserRequestSuccess: (state, action: PayloadAction<IUser>) => {
      state.loading.post.isSucceeded = true;
      state.users.push(action.payload);
      state.loading.post.isLoading = false;
    },
    addUserRequestFailure: (state, action: PayloadAction<string>) => {
      state.loading.post.isSucceeded = false;
      state.loading.post.isLoading = false;
    },
    deleteUserRequest: (state, action: PayloadAction<number>) => {
      state.loading.delete.isLoading = true;
    },
    deleteUserRequestSuccess: (state, action: PayloadAction<number>) => {
      const index = state.users.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        state.users.splice(index, 1);
        state.lastModifiedId = action.payload;
      }
    },
    deleteUserRequestFailure: (state, action: PayloadAction<string>) => {
      state.loading.delete.isSucceeded = false;
      state.loading.delete.isLoading = false;
    },
  },
});

export const {
  getUsersRequest,
  getUsersRequestSuccess,
  getUsersRequestFailed,
  patchUserRequest,
  patchUserRequestFailed,
  patchUserRequestSuccess,
  deleteUserRequest,
  deleteUserRequestFailure,
  deleteUserRequestSuccess,
  addUserRequest,
  addUserRequestFailure,
  addUserRequestSuccess
 } = usersSlice.actions;

export default usersSlice.reducer;
