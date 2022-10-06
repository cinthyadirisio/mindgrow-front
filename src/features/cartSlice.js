import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        productsCart: [],
    },
    reducers: {
        addProduct: (state, action) => {
            let product = state.productsCart.find(item => item.id === action.payload.id)
            if (product) {
                product.quantity++
            } else {
                state.productsCart = [...state.productsCart, action.payload]
            }
        },
        deleteProduct: (state, action) => {
            state.productsCart = state.productsCart.filter((product) => product.id !== action.payload)
        },
        increment: (state, action) => {
            let product = state.productsCart.find(item => item.id === action.payload)
            if (product && product.quantity < product.stock ) {
                product.quantity++
            }
        },
        decrement: (state, action) => {
            let product = state.productsCart.find(item => item.id === action.payload)
            if (product && product.quantity>1) {
                product.quantity--
            }
        }
    }
})

export const { addProduct, deleteProduct, decrement, increment } = cartSlice.actions
export default cartSlice.reducer