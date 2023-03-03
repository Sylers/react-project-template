import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarOpen: false
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
  },
});

export const {
  toggleSidebar,
} = layoutSlice.actions;

export default layoutSlice.reducer;