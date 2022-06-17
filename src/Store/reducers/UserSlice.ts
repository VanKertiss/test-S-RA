import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLoginUser } from "../../api/apiUser";
import { ILoginData } from "../../interface/userInterface";

const initialState = {
    loginData: {
        firstName: 'Иван',
        password: '123456',
    },
    userData: {
        firstName: '',
        lasName: '',
        fatherName: '',
        country: '',
        city: '',
        phone: '',
        password: '',
    },
    authorized: false,
}

export const asyncGetUserLogin = createAsyncThunk(
    'user/getUserData', async (loginData: ILoginData) => {
        const response = await getLoginUser(loginData)
        return response
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(asyncGetUserLogin.fulfilled, (state, action) => {
            if (action.payload !== false) {
                state.userData = action.payload.dataUser;
                state.authorized = true;
            }
        })
    }

});

export const { } = userSlice.actions;
export default userSlice.reducer;