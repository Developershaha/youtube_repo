import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    // cacheResults: (state, action) => {
    //  state = Object.assign(state, action.payload);
    //   state = { ...state, ...action.payload };

    cacheResults: (state, action) => {
      return { ...state, ...action.payload }; // Returning a new state object
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
