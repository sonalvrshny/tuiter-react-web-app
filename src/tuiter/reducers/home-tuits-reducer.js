import {createSlice} from "@reduxjs/toolkit";
import homeTuitsArray from "../data/posts-home.json"
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunk";

const initialState = {
    homeTuitsArray: [],
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

const homeTuitsSlice = createSlice({
    name: 'home-tuits',
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
        likeToggle(state, action) {
            const post = state.findIndex((post) => post._id === action.payload._id)
            if (state[post].liked) {
                state[post].liked = false;
                state[post].likes -= 1;
            }
            else {
                state[post].liked = true;
                state[post].likes += 1;
            }
        },
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

export const {likeToggle, createTuit, deleteTuit} = homeTuitsSlice.actions
export default homeTuitsSlice.reducer;