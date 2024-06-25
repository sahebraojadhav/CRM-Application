import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from './slices/AuthSlice'

console.log("hello");
console.log(authSliceReducer);

export default configureStore({
    reducer:{
        auth:authSliceReducer
    },
    devTools:true
})