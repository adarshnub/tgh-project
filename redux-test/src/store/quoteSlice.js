import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: [],
  tags: [],
};

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
   
  },
  extraReducers : (builder) => {
        builder
        .addCase(getQuotes.fulfilled, (state, action) => {
            state.quotes = [action.payload];
        });
        builder.addCase(getTags.fulfilled, (state, action) => {
            state.tags = action.payload;
          });
  }
});

export const { fetchQuotes } = quoteSlice.actions;
export default quoteSlice.reducer;
//org
// export const getQuotes = createAsyncThunk('quotes/get', async () => {
//     const data = await fetch("http://api.quotable.io/random");
//     const result = data.json();
//     return result;
// });

export const getTags = createAsyncThunk("quotes/getTags", async () => {
    const response = await fetch("http://api.quotable.io/tags");
    const data = await response.json();
    return data.tags;
  });

  export const getQuotes = createAsyncThunk("quotes/getQuotes", async (tag) => {
    let url = "http://api.quotable.io/random";
    if (tag) {
      url = `http://api.quotable.io/random?tag=${tag}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });


