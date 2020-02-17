import api from './api';

export const fetchUserLevel = () => {
  return api.get('/userLevel');
};
