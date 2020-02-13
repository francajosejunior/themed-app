import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {}
});

export const notify = (title, mensage, notificationTypeEnum) => dispatch => {};

// Extract the action creators object and the reducer
const { actions, reducer } = notificationSlice;
// Extract and export each action creator by name
export const { notification } = actions;
// Export the reducer, either as a default or named export
export default reducer;
