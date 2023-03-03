import axios from 'axios'
import { store } from '../store';
import { handleError } from './handleError';

/*
  Here, we configure axios for API calls
  you may tweak the configuration to fit
  your usecase.

  Note: any configuration done here applies
  to any request you make with axios, if you
  need to use a different configuration for
  a particular request, you can create
  another instance of the axios client.
*/
export const setup = () => {
  axios.defaults.baseURL = url;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.beforeRedirect((options, { headers }) => {}),
  axios.interceptors.request.use((config) => {
    // Do something before request is sent
    const token = store.getState().auth?.token;
    config.headers.authorization = token ? `Bearer ${token}` : '';
    return config;
  },

  (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

  axios.interceptors.response.use(
    //Do something after getting the response
    (response) => {

      console.log('Axios Response', response);

      if (response.status === 200 && response.config.method !== 'get') {
        if (response.data.token) return response;
      /*
        You may return a toast for each instance of your response
        or pass it to a response handler utility. In this case, I am
        only logging them to the console.
      */
        if (response.data.status === true) {
          console.log('response.data.detail', response.data.detail);
        } else if (response.data.status === false) {
          console.log('response.data.detail', response.data.detail);
        } else {
          if (response.data.detail) {
            console.log('response.data.detail', response.data.detail);
          }
        }
        return response;
      } else {
        return response;
      }
    },

    //Do something with response error
    async (error) => {
      return Promise.reject(handleError(error));
    }
  );
};