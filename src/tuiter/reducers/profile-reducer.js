import {createSlice} from "@reduxjs/toolkit";
import profileArray from "../data/profile-info.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileArray,
    reducers : {
        updateProfile(state, action) {
            console.log(action.payload);
            return action.payload;
        }
    }
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;