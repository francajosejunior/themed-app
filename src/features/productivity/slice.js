import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false
};

const productivitySlice = createSlice({
  name: 'productivity',
  initialState: initialState,
  reducers: {
    toggleProductivityVisibility: state => {
      state.visible = !state.visible;
    }
  }
});

export const isProductivityVisibleSelector = state =>
  state.productivity.visible;

// Extract the action creators object and the reducer
const { actions, reducer } = productivitySlice;
// Extract and export each action creator by name
export const { toggleProductivityVisibility } = actions;
// Export the reducer, either as a default or named export
export default reducer;
