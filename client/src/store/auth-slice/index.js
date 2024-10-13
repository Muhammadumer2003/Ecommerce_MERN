import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isauthenticated: false,
  isLoading: true,
  user: null,
  error: null,
};

// Register user thunk
export const registerUserstart = createAsyncThunk(
  "/auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Login user thunk
export const loginUserstart = createAsyncThunk(
  "/auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData, {
        withCredentials: true, // Ensure cookies are handled
        headers: {
          'Content-Type': 'application/json',
        },
      });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Logout user thunk
export const logoutUserstart = createAsyncThunk(
  "/auth/logout",
  async (_, { rejectWithValue }) => {
    try {
        const token=localStorage.getItem('token'); 
      const response = await axios.post("http://localhost:5000/api/auth/logout", {}, {
        withCredentials: true, // Ensure cookies are cleared
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Check authentication status thunk
export const check_auth_start = createAsyncThunk(
  "/auth/check-auth",
  async (_, { rejectWithValue }) => {
    try {
        const token=localStorage.getItem('token'); 
      const response = await axios.get("http://localhost:5000/api/auth/check-auth", {
        withCredentials: true, // Ensure cookies are sent with the request
        headers: {
          'Content-Type': 'application/json',
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setupUser: () => {},
  },
  extraReducers: (builder) => {
    builder
      // Handle registration
      .addCase(registerUserstart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserstart.fulfilled, (state) => {
        state.isLoading = false;
        state.isauthenticated = false; // Registration doesn't authenticate
        state.user = null;
      })
      .addCase(registerUserstart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle login
      .addCase(loginUserstart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserstart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isauthenticated = true;
      })
      .addCase(loginUserstart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isauthenticated = false;
        state.user = null;
      })

      // Check authentication
      .addCase(check_auth_start.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(check_auth_start.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isauthenticated = action.payload.success;
      })
      .addCase(check_auth_start.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.user = null;
        state.isauthenticated = false;
      })

      // Handle logout
      .addCase(logoutUserstart.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isauthenticated = false;
      })
      .addCase(logoutUserstart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setupUser } = authSlice.actions;
export default authSlice.reducer;
