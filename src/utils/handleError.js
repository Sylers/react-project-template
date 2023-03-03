import axios from 'axios';
import { authFailed } from '../actions/authSlice';
import store from '../store';

export const handleError = (error) => {
  if (axios.isCancel(error)) return error

  if (!error.response) {
    //NOTE:this will also happen if server request fails
    // error.toJSON()
    try{
        console.log('Request Timeout', error.toJSON())
    }catch(err){
        console.log('err', err)
    }
    return error;
  }

  if (error.response.status === 403) {
    console.log('Error Status Code: 403:', error.response.status);
    return error;
  }

  if (error.response.status === 401) {
    /*
        401 is the standard error status  code returned
        when a request is unauthorised. It may be that
        the access token has expired and you may to do
        something like call refreshToken() request
        to regain access for example;
    */ 
    store.dispatch(authFailed());
    return error;
  }

  if (error.response.status >= 400 && error.response.status <= 500 ) {
    if(error.response.data.Message !== undefined) return error.response.data.Message
    
    //Determine if it is a ModelError, otherwise return the usual error
    try {
      const obj = Object.keys(error.response.data.errors)[0];
      const err = error.response.data.errors[obj][0];

      if (err) {
        console.log('err', err);
        console.log('Model Error', obj.split('.')[1] ?? obj) + '=>' + err.split('. Path')[0];
      }
      return error;
    } catch (errors) {
        // console.log('error.response.statusText', error.response.statusText)
      return error;
    }
  }

  if (typeof error.response.data === 'string') {
    // console.log('error.response.data', error.response.data)
    return error;
  }

  if (error.response.data.errors) {
    try {
      const obj = Object.keys(error.response.data.errors)[0];
      const err = error.response.data.errors[obj][0];
      
      if (err) {
        console.log('err', (obj.split('.')[1] ?? obj) + '=>' + err.split('. Path')[0])
      }
      return error;
    } catch (error) {
        console.log('Failed to get error message');
      return error;
    }
  }
  return error;
};
