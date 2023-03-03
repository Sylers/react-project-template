import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarOpen: false
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = false
    },
  },
});

export const {
  toggleSidebar,
} = layoutSlice.actions;

export default layoutSlice.reducer;