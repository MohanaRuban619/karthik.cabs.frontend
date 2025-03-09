import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../src/reducer/slices/contactSlice"; 
const store = configureStore({
  reducer: {
    contact: contactReducer, // ✅ Add reducer
  },
});

export default store;
