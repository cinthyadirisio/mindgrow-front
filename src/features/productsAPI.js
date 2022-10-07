import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api_url from "../api";
export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${api_url}`
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (obj) => `/products?product=${obj.product}&category=${obj.category}&sort=${obj.sort}&subcategory=${obj.subcategory}`
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
        getNewProduct: builder.mutation({
            query(product) {
                return {
                    url: "/products",
                    method: "POST",
                    body: product,
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                };
            },
        }),
    })
})
export default productsAPI
export const { useGetAllProductsQuery, useGetProductQuery, useGetNewProductMutation } = productsAPI