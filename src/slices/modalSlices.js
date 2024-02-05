import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

const modalsSlices = createSlice({
  name: "modals",
  initialState,
  reducers: {
    RsetChangeProfilePicModal: (state, action) => {
      return { ...state, changeProfilePicModal: action.payload };
    },
  },
});

export const {} = modalsSlices.actions;

export const selectChangeProfilePicModal = (state) =>
  state.modals.changeProfilePicModal;


export default modalsSlices.reducer;
