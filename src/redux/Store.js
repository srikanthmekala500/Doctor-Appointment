import { configureStore } from "@reduxjs/toolkit";
 import {  userSlice } from "./slice/userslice";
 import {  alertSlice } from "./slice/alertslice";
export default  configureStore({
    reducer:{
        alerts:alertSlice.reducer,
        user: userSlice.reducer,

    },
})
 