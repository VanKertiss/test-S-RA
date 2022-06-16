import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questionstData: [
        {title: 'Для подачи заявления необходимо подготовить', text: '1. Данные для авторизации в личном кабинете', id: 1},
        {title: 'Связь с оператором реестра', text: '1. Данные для авторизации в личном кабинете', id: 2},
        {title: 'Как подать заявление на включение программного обеспечения в реестр', text: '1. Данные для авторизации в личном кабинете', id: 3},
        {title: 'Где можно подать заявление', text: '1. Данные для авторизации в личном кабинете', id: 4},
        {title: 'Как узнать мне причину отказа', text: '1. Данные для авторизации в личном кабинете', id: 5},
        {title: 'Что делать, если Вам отказали', text: '1. Данные для авторизации в личном кабинете', id: 6},
        {title: 'Изменение реестревой записи', text: '1. Данные для авторизации в личном кабинете', id: 7},
    ]
}

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {

    }
});

export const {  } = questionsSlice.actions;
export default questionsSlice.reducer;