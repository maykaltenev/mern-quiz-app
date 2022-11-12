import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        pushResultAction: (state, action) => {
            state.result.push(action.payload)
        },
        updatedResultAction: (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked, trace, trace + 1);
        },
        resetResultAction: (state, action) => {
            return {
                userId: null,
                result: []
            }
        }
    }
})

export const { setUserId, pushResultAction, resetResultAction, updatedResultAction } = resultReducer.actions;

export default resultReducer.reducer;