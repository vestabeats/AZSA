import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const API_URI = 'https://azsa-backend.onrender.com'
//const API_URI = import.meta.env.VITE_APP_BASE_URL
const baseQuery = fetchBaseQuery({baseUrl:API_URI})
export const apiSlice = createApi({
    baseQuery,
    tagTypes:[],
    endpoints:(builder)=>({})
})
