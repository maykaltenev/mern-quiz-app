import { createSlice } from "œreduxjs/toolkit"

/** crete reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialSate: {
        queue: [],
        answer: [],
        trace: 0
    },
    reducers: {
        startExamAction: (state, action) => {
            return {
                state,
                queue: action.payload
            }
        }
    }
});
export const { startExamAction } = questionReducer.actions

export default questionReducer.reducer;