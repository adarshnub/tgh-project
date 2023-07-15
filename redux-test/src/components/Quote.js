import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/bookmarkSlice";
import { getQuotes } from "../store/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const { quotes } = useSelector((state) => state.quotes);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("http://api.quotable.io/tags");
      const data = await response.json();
      setTags(data.tags);
    };
    fetchTags();
  },[]);

  useEffect(() => {
    dispatch(getQuotes());
  }, []);

  const addToBookmark = (quote) => {
    const payload = {
      content: quote.content,
      author: quote.author,
    };
    dispatch(add(payload));
  };

  // const fetchRandomQuote = async (tag) => {
  //   const url = tag
  //     ? `http://api.quotable.io/random?tag=${tag}`
  //     : "http://api.quotable.io/random";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   dispatch(getQuotes(data));
  // };

  return (
    <div>
      <h1>Quote</h1>

     

      {quotes.length > 0 ? (
        quotes.map((quote) => (
          <div key={quote._id}>
            <div
              className="bg-blue-500
    bg-opacity-40
  rounded-2xl
  min-h-[8rem]
  flex flex-col
  justify-center
  items-center
  gap-8
  text-white
  mx-auto
  w-3/4
  px-4
  py-2
  relative
  "
            >
              <p>{quote.content}</p>
              <h4 className="text-sm font-bold">~{quote.author}</h4>
              <button
                onClick={() => addToBookmark(quote)}
                className="bg-red-700 px-4 py-2 rounded-lg
                hover:bg-red-400 hover:font-bold"
              >
                Add Bookmark
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading quote...</p>
      )}
      <button onClick={() => dispatch(getQuotes())} className="mt-8">
        <span className="text-white bg-green-600 rounded-md px-6 py-2 hover:bg-green-300 hover:text-black hover:font-bold ">
          Next Quote
        </span>
      </button>
    </div>
  );
};

export default Quote;
