/* import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
 */
