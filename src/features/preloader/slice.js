import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetching: false
};

const preloaderSlice = createSlice({
  name: "preloader",
  initialState: initialState,
  reducers: {
    setFetching: (state, action) => {
      state.fetching = action.payload;
    }
  }
});

export const isFetchingSelector = state => state.preloader.fetching;

// Extract the action creators object and the reducer
const { actions, reducer } = preloaderSlice;
// Extract and export each action creator by name
export const { setFetching } = actions;
// Export the reducer, either as a default or named export
export default reducer;
