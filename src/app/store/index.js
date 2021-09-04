import { configureStore } from '@reduxjs/toolkit';
import reducer from "../main/store";

const store = configureStore({
    reducer,
})

export default store;