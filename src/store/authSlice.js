import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: true       
    },
    reducers: {
        isAuthModalOpen: (state) => {
            state.isAuth = true
        },
        isAuthModalClose: (state) => {
            state.isAuth = false
        }
    }
})
export const { isAuthModalOpen, isAuthModalClose } = authSlice.actions;
export default authSlice.reducer;