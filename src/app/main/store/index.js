import { combineReducers } from '@reduxjs/toolkit';
import test from "./testSlice";

const reducer = combineReducers({
    test,
});

export default reducer;