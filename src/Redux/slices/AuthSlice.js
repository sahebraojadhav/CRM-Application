import { createSlice } from "@reduxjs/toolkit";

const intialState={
    role:localStorage.getItem("role") || "",
    data:localStorage.getItem("data") || {},
    isLoggedIn:localStorage.getItem("isLoggedIN") || false 
}

const authSlice=createSlice({
    name:'auth',
    intialState,
    reducers:[]
})

export default authSlice.reducer