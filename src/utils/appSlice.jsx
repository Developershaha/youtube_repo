import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpenFlag: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpenFlag = !state.isMenuOpenFlag;
    },
    closeManu: (state) => {
      state.isMenuOpenFlag = false;
    },
  },
});

export const { toggleMenu, closeManu } = appSlice.actions;
export default appSlice.reducer;
