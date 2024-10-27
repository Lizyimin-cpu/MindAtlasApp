import { configureStore } from "@reduxjs/toolkit";
import enrolmentsReducer from "./enrolmentsSlice";

const store = configureStore({
  reducer: {
    enrolments: enrolmentsReducer,
  },
});

export default store;
