import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
  name: "edit",
  initialState: { idEdit: "", idDelete: "", stateProducts: false },
  reducers: {
    setIdEdit: (state, action) => {
      state.idEdit = action.payload;
    },
    setIdDelete: (state, action) => {
      state.idDelete = action.payload;
    },
    setStateProducts: (state) => {
      state.stateProducts = !state.stateProducts
    }
  },
});

export const { setIdEdit, setIdDelete, setStateProducts} = editSlice.actions

export default editSlice.reducer