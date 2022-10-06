import {configureStore} from '@reduxjs/toolkit'
import usersAPI from './userAPI'
import loggedSlice from './loggedSlice'
import productsAPI from './productsAPI'
import publicationsAPI from './publicationsAPI'
export const store = configureStore({
    reducer: {
        [usersAPI.reducerPath] : usersAPI.reducer,
        [productsAPI.reducerPath] : productsAPI.reducer,
        [publicationsAPI.reducerPath] : publicationsAPI.reducer,
        logged:loggedSlice,

    }
})