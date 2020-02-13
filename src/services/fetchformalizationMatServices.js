import api from './api'

export const fetchFormalizationDashboard = (operationId, search) => {
  // const payload = {
  //   operationId,
  //   search
  // };
  // api.post("/dashboard", payload);
  return api.get('/dashboard')
}
