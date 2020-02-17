import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchUserLevel } from '../../services/userLevelServices';

const initialState = {
  levelText: '',
  msg: '',
  level: 0 // percent
};

const slice = createSlice({
  name: 'userLevel',
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      return { ...action.payload };
    }
  }
});

export const fetchUserLevelAction = () => async dispatch => {
  const data = await fetchUserLevel();
  dispatch(slice.actions.setData(data));
};

export const userLevelSelector = state => state.userLevel;
export const userLevelIconsSelector = state => {
  const userLevel = state.userLevel;
  const icons = Array.from(Array(4), () => 'star_border'); //[ 'star_border', 'star_border', 'star_border', 'star_border' ]
  const _level = userLevel.level / 25;
  const int = Math.trunc(_level);
  const half = _level % 1;

  icons.forEach((x, i) => {
    if (i + 1 <= int) {
      icons[i] = 'star';
    }
    if (i + 1 === int + 1 && half > 0) {
      icons[i] = 'star_half';
    }
  });

  return icons;
};

// Extract the action creators object and the reducer
const { actions, reducer } = slice;
// Extract and export each action creator by name
export const { setData } = actions;
// Export the reducer, either as a default or named export
export default reducer;
