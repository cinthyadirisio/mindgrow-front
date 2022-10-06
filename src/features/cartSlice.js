import { createSlice } from "@reduxjs/toolkit";
import React from 'react'

export const cartSlice = createSlice({
    name:"cart",
    initialState: {
        productsCart: []
        
    },
    reducers:{
        addProduct: (state, action) => {
            state.productsCart = [...state.productsCart, action.payload]
        },
        deleteProduct: (state, action) => {
            state.productsCart = state.productsCart.filter((product)=> product.id !== action.payload)
        }
    }
})

export const {addProduct, deleteProduct} = cartSlice.actions
export default cartSlice.reducer