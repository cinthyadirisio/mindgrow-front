import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiurl from "../api";
export const productsAPI =  createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${apiurl}`
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (obj) => `/products?product=${obj.product}&category=${obj.category}&sort=${obj.sort}`
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
    })
})
export default productsAPI
export const {useGetAllProductsQuery, useGetProductQuery} = productsAPI