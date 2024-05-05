// reducers/counterReducer.js
import { createSlice } from "@reduxjs/toolkit";

const jobListingSlice = createSlice({
  name: "job",
  initialState: {
    value: 0,
    job: [],
    filteredJob: [],
  },
  reducers: {
    saveJobList(state, action) {
      state.job = action.payload;
    },
    createFilteredJobList(state, action) {
      state.filteredJob = action.payload;
    },
    resetFilteredJobList(state) {
      state.filteredJob = [];
    },
  },
});

export const { saveJobList, createFilteredJobList, resetFilteredJobList } =
  jobListingSlice.actions;
export default jobListingSlice.reducer;
