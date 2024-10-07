import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from "axios";
const initialState={
    isauthenticated:false,
    isLoading:false,
    user:null
}

export const registerUserstart=createAsyncThunk(
    "/auth/register",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Response data:", response.data);
            return response.data;
        } catch (error) {
            console.error("Registration error:", error.response?.data || error.message);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        registerUserStart:(state)=>{
            state.isLoading=true;
        },

        extraReducers:(builder)=>{
            builder.
            addCase(registerUserStart.pending,(state)=>{
                state.isLoading=true;
            })
            .addCase(registerUserStart.fulfilled,(state)=>{
                state.isLoading=false;
                state.user=null;
                state.isauthenticated=false;
            })
            .addCase(registerUserStart.rejected,(state)=>{
                state.isLoading=false;
                state.user=null;
                state.isauthenticated=false;
            })
        }
       
        
    }

    
})

export const {registerUserStart}=authSlice.actions;
export default authSlice.reducer;
