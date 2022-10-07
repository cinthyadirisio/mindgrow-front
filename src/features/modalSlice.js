import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modalEditProduct: false,
        modalDeleteProduct: false
    },
    reducers: {
        setModalEditProduct: (state) => {
            state.modalEditProduct = !state.modalEditProduct
        },
        setModalDeleteProduct: (state) => {
            state.modalDeleteProduct = !state.modalDeleteProduct
        }
    },

})

export const { setModalEditProduct, setModalDeleteProduct } = modalSlice.actions

export default modalSlice.reducer