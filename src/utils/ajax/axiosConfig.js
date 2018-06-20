import axios from 'axios';

export const foo = '';

const apiResponse = (response) => {
  if (response) {
    return response;
  }
  return Promise.resolve(response);
};

export const apiResponseErrorHandler = error => Promise.reject(error);

export const axiosInstance = () => {
  const instance = axios.create();
  instance.interceptors.response.use(apiResponse, apiResponseErrorHandler);
  return instance;
};
