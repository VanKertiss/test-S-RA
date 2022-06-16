import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

export const {  } = userSlice.actions;
export default userSlice.reducer;