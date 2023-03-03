import { createSlice } from '@reduxjs/toolkit';
import { saveTokenToLocalStorage, getTokenFromLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage, removeTokenFromLocalStorage, saveUserToLocalStorage } from '../../utils/utils';


const initialState = {
  user: getUserFromLocalStorage,
  token: getTokenFromLocalStorage
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (state, { payload }) => {
      state.user = payload?.user;
      state.token = payload?.token
      saveUserToLocalStorage({...payload?.user, authenticated: 'true'});
      saveTokenToLocalStorage({token: payload?.token})
    },

    authFailed: (state) => {
      state.user = null;
      state.token = null;
      removeUserFromLocalStorage()
      removeTokenFromLocalStorage()
    },

    logOut: (state) => {
      authFailed()
    //   queryCache.clear()
    },
  },
});

export const {
  authSuccess,
  authFailed,
  logOut
} = authSlice.actions;

export default authSlice.reducer;