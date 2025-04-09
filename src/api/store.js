import reducer from "./mainReducer/main";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers(reducer);

export const store = configureStore({
  reducer: reducers,
});
