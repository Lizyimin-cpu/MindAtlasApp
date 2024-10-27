import { createSlice } from "@reduxjs/toolkit";

const enrolmentsSlice = createSlice({
  name: "enrolments",
  initialState: {
    list: [],
  },
  reducers: {
    setEnrolments: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setEnrolments } = enrolmentsSlice.actions;
export default enrolmentsSlice.reducer;
