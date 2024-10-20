/* import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { logInThunk, logOutThunk, logUpThunk } from "./operation";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isAuthLoading: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getCurrentUser: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
      email: payload.email,
      avatar: payload.avatar,
      isAuth: true,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(logUpThunk.pending, (state) => {
        state.isAuthLoading = true;
        state.errorMessage = null;
      })
      .addCase(logUpThunk.fulfilled, (state, { payload }) => {
        if (!payload.error) {
          state.userId = payload.uid;
          state.login = payload.displayName;
          state.email = payload.email;
          state.isAuth = true;
        } else {
          state.errorMessage = payload.error;
          toast.error(`${payload.error}`);
        }
        state.isAuthLoading = false;
      })
      .addCase(logUpThunk.rejected, (state, { error }) => {
        state.isAuthLoading = false;
        state.errorMessage = error.message;
        toast.error(`${error.message}`);
      })
      .addCase(logInThunk.pending, (state) => {
        state.isAuthLoading = true;
        state.errorMessage = null;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        if (!payload.error) {
          state.userId = payload.uid;
          state.login = payload.displayName;
          state.email = payload.email;
          state.isAuth = true;
        } else {
          state.errorMessage = payload.error;
          toast.error(`${payload.error}`);
        }
        state.isAuthLoading = false;
      })
      .addCase(logInThunk.rejected, (state, { error }) => {
        state.isAuthLoading = false;
        state.errorMessage = error.message;
        toast.error(`${error.message}`);
      })
      .addCase(logOutThunk.pending, (state) => {
        state.isAuthLoading = true;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.userId = null;
        state.login = null;
        state.email = null;
        state.isAuth = false;
        state.isAuthLoading = false;
      })
      .addCase(logOutThunk.rejected, (state, { error }) => {
        state.isAuthLoading = false;
        state.errorMessage = error.message;
        toast.error(`${error.message}`);
      });
  },
});

export const { getCurrentUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
 */
