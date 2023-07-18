import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmarkSlice";
import quoteSlice, { getTags } from "./quoteSlice";



const store = configureStore({
    reducer : {
        bookmark : bookmarkSlice,
        quotes : quoteSlice,
    },
});
// store.dispatch(getTags());

export default store;