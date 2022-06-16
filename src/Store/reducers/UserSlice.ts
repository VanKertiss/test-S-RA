import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        firstName: 'Иван',
        lasName: 'Дульчик',
        fatherName: 'Иванович',
        country: 'Belarus',
        city: 'Minsk',
        phone: '+37544-546-54-23',
        password: '123456',
    },
    authorized: true,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

export const {  } = userSlice.actions;
export default userSlice.reducer;