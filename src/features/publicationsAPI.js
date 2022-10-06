import React from 'react'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiurl from "../api";


export const publicationsAPI = createApi({
    reducerPath: 'publicationsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${apiurl}`
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getAllPublications: builder.query({
            query: (obj) => `/publications?category=${obj.category}`
        }),
        getOnePublication: builder.query({
            query: (id) => `/publications/${id}`
        }),
    })
})
export default publicationsAPI
export const {useGetAllPublicationsQuery, useGetOnePublicationQuery} = publicationsAPI
