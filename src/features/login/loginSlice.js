import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin } from '../../services/login';
import history from '../../util/history';

const initialState = {
  user: {
    userId: '',
    name: '',
    email: '',
    authenticated: false,
    criated: '',
    expire: null,
    token: null
  },
  authenticating: false,
  logged: false
};

const loginSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const { token } = action.payload;
      state.user.token = token;
    },
    setFetchingLogin: (state, action) => {
      state.authenticating = action.payload;
    },
    logout: (state, action) => {
      state = initialState;
    }
  }
});

export const fetchLoginAction = login => async dispatch => {
  try {
    dispatch(loginSlice.actions.setFetchingLogin(true));
    const result = await fetchLogin(login);
    dispatch(loginSlice.actions.login(result));
    history.push('/');
  } finally {
    dispatch(loginSlice.actions.setFetchingLogin(false));
  }
};

//selectors
export const loginSelector = state => state.auth;

// Extract the action creators object and the reducer
const { actions, reducer } = loginSlice;
// Extract and export each action creator by name
export const { logout } = actions;
// Export the reducer, either as a default or named export
export default reducer;
