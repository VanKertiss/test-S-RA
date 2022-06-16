import { configureStore } from "@reduxjs/toolkit";

import userReducer from './reducers/UserSlice';
import documentReducer from './reducers/DocumentSlice';
import questionsReducer from './reducers/QuestionsSlice';
import registersReducer from './reducers/RegistersSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        questions: questionsReducer,
        document: documentReducer,
        registers: registersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;