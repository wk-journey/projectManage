import axios from "axios";
import qs from "qs";

import { Message } from "element-ui";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    // logical handler before request
    console.log(config);
    return config;
  },
  error => {
    console.log(error);
    // return error
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    console.log(response);
    // const res = response.data
    // logical handler before response
    return response;
  },
  error => {
    console.log("err" + error);
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    // return error
    return Promise.reject(error);
  }
);

export default service;
