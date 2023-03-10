import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {Login} from '../interfaces/Login';
import { Register } from '../interfaces/Register';
import { UserResponse } from '../interfaces/UserResponse';


export const login = createAsyncThunk("auth/login",async(args:Login)=>{
    try{
        const response = await axios.post("http://localhost:5000/casestudy/auth/login",args);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        const failedResponse:UserResponse = {
            id:-1,
            email:"none",
            firstName:"Guest",
            lastName:"User",
            country:"United States"
        }
        throw error;
    }
})

export const logout = createAsyncThunk("auth/logout",async()=>{
    try{
        const response = await axios.post("http://localhost:5000/casestudy/auth/logout");
        if(response.status == 200)
        {
            return response.data;
        }
    }
    catch(error)
    {
        console.log(error);
    }
})

export const register = createAsyncThunk("auth/register", async(args:Register)=>{
    try{
        const response = await axios.post("http://localhost:5000/casestudy/auth/register",args);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
        const failedResponse:UserResponse = {
            id:-1,
            email:"none",
            firstName:"Guest",
            lastName:"User",
            country:"United States"
        }
        return failedResponse;
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState:{
        currentUser:{
            id:-1,
            email:"none",
            firstName:"Guest",
            lastName:"User",
            country:"United States"
        },
        status: "idle",
        error: null
    },
    reducers: {
        getUserFromLocal(state) {
            state.currentUser = JSON.parse(localStorage.getItem("user") || "{}");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled,(state,action)=>{
            state.status="Success";
            state.currentUser = action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload));
        }).addCase(login.rejected,(state,action)=>{
            state.status="Failed";
        }).addCase(logout.fulfilled,(state,action)=>{
            state.status="Success";
            state.currentUser = {id:-1,email:"none",firstName:"Guest",lastName:"User",country:"United States"};
            localStorage.setItem("user",JSON.stringify(state.currentUser));
        }).addCase(register.fulfilled,(state,action)=>{
            state.status="Success";
            state.currentUser = action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload));
        })
    }
});


export const {getUserFromLocal} = authSlice.actions;
export default authSlice.reducer;