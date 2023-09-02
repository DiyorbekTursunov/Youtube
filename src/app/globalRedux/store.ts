"use client";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import allVideoReducer from "./Slices/AllVideo/AllVideoSlice";

export const store = configureStore({
  reducer: {
    AllVideo: allVideoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;