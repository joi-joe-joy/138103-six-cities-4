import axios from "axios";

const ErrorType = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case ErrorType.UNAUTHORIZED:
        onUnauthorized();
        throw err;
      case ErrorType.BAD_REQUEST:
        throw err;
      default:
        throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


