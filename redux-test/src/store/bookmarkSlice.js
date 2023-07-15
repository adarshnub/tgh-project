import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const bookmarkSlice = createSlice({
    name : 'bookmark',
    initialState,
    reducers: {
        add(state,action){
            state.push(action.payload)
        }
    }
});

export const {add} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;