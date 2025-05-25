import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toogleSlice";
const store = configureStore({
    reducer:{
        toggle: toggleSlice,

    }
})
export default store;

