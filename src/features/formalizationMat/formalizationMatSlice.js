import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { setFetching } from "../../features/preloader/slice";
import { fetchFormalizationDashboard } from "../../services/fetchformalizationMatServices";

const initialState = {
  data: {
    status: [],
    propostasEmAndamento: []
  },
  fetching: false
};

const formalizationMatSlice = createSlice({
  name: "formalizationMat",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFetching: (state, action) => {
      state.fetching = action.payload;
    }
  }
});

export const fetchformalizationMatAction = (
  operationId,
  search
) => async dispatch => {
  try {
    dispatch(setFetching(true));
    const result = await fetchFormalizationDashboard(operationId, search);
    dispatch(formalizationMatSlice.actions.setData(result));
  } finally {
    dispatch(setFetching(false));
  }
};

//selectors
export const formalizationStatusSelector = state => {
  return _.orderBy(state.formalizationMat.data.status, ["ordem"], ["asc"]);
};

export const formalizationPropostasAndamentoSelector = state => {
  return _.orderBy(
    state.formalizationMat.data.propostasEmAndamento,
    ["ordem"],
    ["asc"]
  );
};

// Extract the action creators object and the reducer
const { actions, reducer } = formalizationMatSlice;
// Extract and export each action creator by name
export const { formalizationMat } = actions;
// Export the reducer, either as a default or named export
export default reducer;
