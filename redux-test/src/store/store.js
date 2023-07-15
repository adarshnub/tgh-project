import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmarkSlice";
import quoteSlice from "./quoteSlice";



const store = configureStore({
    reducer : {
        bookmark : bookmarkSlice,
        quotes : quoteSlice,
    }
});


export default store;