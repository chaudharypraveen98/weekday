// reducers/counterReducer.js
import { createSlice } from "@reduxjs/toolkit";

const jobListingSlice = createSlice({
  name: "job",
  initialState: {
    value: 0,
    job: [],
  },
  reducers: {
    saveJobList(state, action) {
      state.job = action.payload;
    },
  },
});

export const { saveJobList } = jobListingSlice.actions;
export default jobListingSlice.reducer;
