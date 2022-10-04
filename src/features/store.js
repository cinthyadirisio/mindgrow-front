import {configureStore} from '@reduxjs/toolkit'
import {usersAPI} from './userAPI'
import { loggedSlice } from './loggedSlice'

export const store = configureStore({
    reducer: {
        [usersAPI.reducerPath] : usersAPI.reducer,
        logged:loggedSlice,

    }
})