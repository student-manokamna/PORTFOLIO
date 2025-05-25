import { createSlice } from "@reduxjs/toolkit";

const toogleSlice= createSlice({
    name: 'toggle',
    initialState:{
        isOpen: false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isOpen= !state.isOpen;
        }
    }

})
export const {toggleMenu}= toogleSlice.actions;
export default toogleSlice.reducer;


