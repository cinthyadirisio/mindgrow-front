import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modalEditProduct: false
    },
    reducers: {
        setModalEditProduct: (state) =>
            state.modalEditProduct = !state.modalEditProduct
    }

})

export const { setModalEditProduct } = modalSlice.actions

export default modalSlice.reducer