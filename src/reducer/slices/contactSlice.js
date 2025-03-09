import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { sendMessage } = contactSlice.actions;
export default contactSlice.reducer;
