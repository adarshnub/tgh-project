import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const bookmarkSlice = createSlice({
    name : 'bookmark',
    initialState,
    reducers: {
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            const bookmarkId = action.payload;
            return state.filter(item => item.id !== bookmarkId);
            
            
        }
    }
});

export const {add, remove} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;