import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: [],
};

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    // fetchQuotes(state, action) {
    //   state.quotes = action.payload;
    // },
  },
  extraReducers : (builder) => {
        builder
        .addCase(getQuotes.fulfilled, (state, action) => {
            state.quotes = [action.payload];
        })
  }
});

export const { fetchQuotes } = quoteSlice.actions;
export default quoteSlice.reducer;

export const getQuotes = createAsyncThunk('quotes/get', async () => {
    const data = await fetch("http://api.quotable.io/random");
    const result = data.json();
    return result;
})

// export function getQuotes() {
//   return async function getQuotesThunk(dispatch, getState) {
//     const data = await fetch("http://api.quotable.io/random");
//     const result = data.json();
//     dispatch(fetchQuotes([result]));
//   };
// }
