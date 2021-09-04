import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import axios from 'axios';

export const getTest = createAsyncThunk('practice3/login', async params => {
    const response = await axios.get(`/test`);
    return response.data;
})

const testAdapter = createEntityAdapter({});

export const {
    selectAll: selectTest,
    selectById: selectTestById
} = testAdapter.getSelectors(state => state.test);

const testSlice = createSlice({
    name: 'practice3/test',
    initialState: testAdapter.getInitialState(),
    reducers:{},
    extraReducers: {
        [getTest.fulfilled]: testAdapter.setAll,
    }
})

export default testSlice.reducer;