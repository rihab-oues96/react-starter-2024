import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  isAuthenticated: false,
  isInitialised: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialise: (state, action) => {
      const { isAuthenticated, user } = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.isInitialised = true;
      state.user = user;
    },

    restore: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    /** register */

    builder.addCase(register.pending, (state) => {
      state.error = null;
      state.status = "loading";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      const { token } = action.payload.payload;
      console.log(token);
      state.status = "succeeded";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action?.payload;
      state.status = "failed";
    });

    /** login  */

    builder.addCase(login.pending, (state) => {
      state.error = null;
      state.status = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { token, user } = action.payload.payload;
      // you can store token in localstorage here
      console.log(token);
      state.isAuthenticated = true;
      state.user = user;
      state.status = "succeeded";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action?.payload;
      state.status = "failed";
    });

    /** logout  */

    builder.addCase(logout.pending, (state) => {
      state.error = null;
      state.status = "loading";
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.status = "succeeded";
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action?.payload;
      state.status = "failed";
    });
  },
});

export const { initialise, restore } = authSlice.actions;

export default authSlice.reducer;
