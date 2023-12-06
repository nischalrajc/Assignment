import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./apiSlice/authSlice.js";
import api from "./apiSlice/apiSlice.js";

export const store = configureStore({
    reducer: {
      auth:authReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
  
  export default store;