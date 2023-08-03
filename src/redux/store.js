
import {configureStore} from '@reduxjs/toolkit'
import apiReducer from './../features/apiSlice'



export const store = configureStore({
    reducer:{
        red:apiReducer
    }
})