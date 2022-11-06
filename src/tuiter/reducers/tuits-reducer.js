import {createSlice} from "@reduxjs/toolkit";
import tuitsArray from '../data/posts.json'

const tuitsSlice = createSlice({
    name: 'homeTuits',
    initialState: tuitsArray,
});

export default tuitsSlice.reducer;