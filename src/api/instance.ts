import axios from 'axios';

export type AxiosRequestConfig<Params = undefined> = Params extends undefined
  ? {
      config?: import('axios').AxiosRequestConfig;
    }
  : {
      params: Params;
      config?: import('axios').AxiosRequestConfig;
    };

export const api = axios.create({
  baseURL: 'https://cheese-api.onrender.com/'
});
