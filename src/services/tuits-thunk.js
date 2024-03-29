import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"

export const createTuitThunk = createAsyncThunk(
        'tuits/createTuit',
        async (thunkAPI) =>
            await service.createTuit(thunkAPI)
        )

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const updateTuitThunk = createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>{
            await service.updateTuit(tuit)
            return tuit
        })

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })