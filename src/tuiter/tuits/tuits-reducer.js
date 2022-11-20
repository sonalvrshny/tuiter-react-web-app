import {createSlice} from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunk";
import tuits from './tuits.json'

const initialState = {
    tuits: [],
    loading: false
}
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "../../images/nasa-icon.png"
}

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "comments": 0,
    "retuits": 0,
    "likes": 0,
    "liked": false
}

const tuitsSlice = createSlice({
    name: 'tuitsData',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitIdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitIdx] = {
                    ...state.tuits[tuitIdx],
                    ...payload
                }
            }
    },
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1)
        }
    }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;