import axios from 'axios';
import configuration from '../configuration/index';

import { notify } from '../features/notification/notificationSlice';
import { notificationTypeEnum } from './notificationServices';
import { logout } from '../features/login/loginSlice';
import { isDebugging } from './environmentServices';
import mock from '../mocks';

let lastStatus = null;
const api = axios.create({
  baseURL: configuration.BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  }
});

api.interceptors.request.use(request => {
  const store = require('./../store').default;
  const token = store.getState().auth.user.token;
  request.headers.Authorization = `Bearer ${token}`;

  return request;
});

api.interceptors.response.use(
  response => {
    if (isDebugging()) {
      const mockPromise = mock(response.config.url);
      if (mockPromise) {
        return mockPromise;
      }
    }

    return (
      response?.data?.ObjetoDeRetorno ||
      response?.data?.objetoDeRetorno ||
      response?.data
    );
  },
  error => {
    if (isDebugging()) {
      const mockPromise = mock(error.response.config.url);
      if (mockPromise) {
        return mockPromise;
      }
    }

    const store = require('./../store').default;
    const { dispatch } = store;

    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    if (error?.config?.headers['X-No-Notify'] === 'true') {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && lastStatus !== 401) {
      dispatch(notify('', 'Sua sessão expirou', notificationTypeEnum.ERROR));
      dispatch(logout());
    } else {
      const msg =
        error?.response?.data?.Mensagem ||
        error?.response?.data?.error_description ||
        'Falha na conexão com o servidor.';

      dispatch(notify('', msg, notificationTypeEnum.ERROR));
    }
    lastStatus = error.response?.status;
    return Promise.reject(error);
  }
);

export const getCanceler = () => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  return {
    config: {
      cancelToken: source.token
    },
    cancel: source.cancel
  };
};

export default api;
