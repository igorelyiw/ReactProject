import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI } from "../api/api";

export const getUsersData = createAsyncThunk(
    'users/getUsersData',
    async () => {

        const response = await usersAPI()
        return response
    }
)
export const getUser = createAsyncThunk(
    'users/getUser',
    async () => {

        const response = await usersAPI()
        return response
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isFetching: false,
    },
    reducers: {
        getUser: (state, action) => {
            state.users = action.payload
        }
    },
    extraReducers: {
        [getUsersData.pending]: (state, action) => {
            state.isFetching = true;
        },
        [getUsersData.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.isFetching = false;
        }
    }
})
export const { getUsers } = userSlice.actions;
export default userSlice.reducer;