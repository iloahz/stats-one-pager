import { createSlice } from '@reduxjs/toolkit'
import Data from '../models/data'

const initialState = {
    rawText: "",
    data: [],
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        updateRawText: (state, action) => {
            state.rawText = action.payload
            state.data = state.rawText.split('\n').map(x => Number(x))
        }
    }
})

export const { updateRawText } = inputSlice.actions
export default inputSlice.reducer
