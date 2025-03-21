import API from "@/config/apiConfig";
import {
  loginUserRequest,
  logoutUserRequest,
  registerUserRequest,
  userAuthRequest,
} from "@/common/lib/apiEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserTypes } from "@/common/types/types";

type InitialStateType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserTypes | null;
  error: string | null;
};

const initialState: InitialStateType = {
  isAuthenticated: false,
  isLoading: false,
  user: JSON.parse(localStorage.getItem("user") || "null"),
  error: null,
};

type UserRegisterType = {
  email: string;
  password: string;
  avatar: File | null;
};

export const registerUser = createAsyncThunk(
  "registerUser/data",

  async (formData: UserRegisterType) => {
    try {
      const response = await API.post(registerUserRequest, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("User registration failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser/data",
  async (formData: { email: string; password: string }) => {
    try {
      const response = await API.post(loginUserRequest, formData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("User login failed");
    }
  }
);

export const checkAuth = createAsyncThunk("checkAuth/data", async () => {
  try {
    const response = await API.get(userAuthRequest, {
      headers: {
        "Cache-Control":
          "no-store , no-cache , must-revalidate , proxy-revalidate",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error((error as string) || "Error getting");
  }
});

export const logoutUser = createAsyncThunk("logoutUser/data", async () => {
  try {
    await API.get(logoutUserRequest);
    return;
  } catch (error) {
    console.error(error);
    throw new Error("Authentication failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        // console.log("action", action);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "error in user registration";
        // console.log("action", action);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // console.log("action", action);
        state.isLoading = false;
        state.user = action.payload.data;
        state.isAuthenticated = action.payload.success;
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "error in user login";
        state.user = null;
        localStorage.setItem("user", JSON.stringify(state.user));
        // console.log("action", action);
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.error?.message || "Authentication failed";
        state.user = null;
        localStorage.setItem("user", JSON.stringify(state.user));
        // console.log("action", action);
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Authentication failed";
        // console.log("action", action);
      });
  },
});

export const { setUser, setAuthenticated } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
