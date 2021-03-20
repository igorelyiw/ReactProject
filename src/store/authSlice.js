import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: true,
        users: []
    },
    reducers: {
        isAuthModalOpen: (state) => {
            state.isAuth = true
        },
        isAuthModalClose: (state) => {
            state.isAuth = false
        },
        getUsers: (state, action) => {
            state.users = action.payload
        }
    }
})
export const { isAuthModalOpen, isAuthModalClose, getUsers } = authSlice.actions;
export default authSlice.reducer;