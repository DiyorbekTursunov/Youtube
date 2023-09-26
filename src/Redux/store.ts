import { configureStore } from "@reduxjs/toolkit";
import mainVideoReducer  from "./reducers/mainVideo";
export const store = configureStore({
    reducer: {
        mainVideoReducer,
    }, 
})

export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.getState