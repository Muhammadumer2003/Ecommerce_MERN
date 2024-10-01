import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isauthenticated:false,
    isLoading:false,
    user:null
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        registerUserStart:(state)=>{
            state.isLoading=true;
        },
       
        
    }

    
})

export const {registerUserStart}=authSlice.actions;
export default authSlice.reducer;
