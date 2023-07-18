import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/bookmarkSlice";
import { getQuotes, getTags } from "../store/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const { quotes } = useSelector((state) => state.quotes);
  const tags = useSelector((state) => state.quotes.tags);
  console.log(tags);
  const bookmark = useSelector((state) => state.bookmark);
  const [selectedTag, setSelectedTag] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    dispatch(getQuotes());
    dispatch(getTags());
  }, []);

  const checkBookmark = () => {
    const bookmarked = bookmark.filter((item) => item.id === quotes[0]._id);
    if (bookmarked.length > 0) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  };

  useEffect(() => {
    checkBookmark();
  }, [quotes, bookmark]);

  const generateQuote = () => {
    if(selectedTag){
      dispatch(getQuotes(selectedTag));
    }else {
      dispatch(getQuotes());
    } 
  }

  const addToBookmark = (quote) => {
    const payload = {
      id: quote._id,
      content: quote.content,
      author: quote.author,
    };
    dispatch(add(payload));
  };

  const handleTagChange = (e) => {
    const selectedTag = e.target.value;
    setSelectedTag(selectedTag);
  };

  return (
    <div>
      <h1>Quote</h1>

      <div>
        {quotes.length > 0 ? (
          quotes.map((quote) => (
            <div key={quote._id}>
              <div
                className={
                  "bg-blue-500 bg-opacity-40 rounded-2xl min-h-[8rem] flex flex-col justify-center items-center gap-8 text-white mx-auto w-3/4 px-4 py-2 relative"
                }
              >
                <p>{quote.content}</p>
                <h4 className="text-sm font-bold">~{quote.author}</h4>
                <button
                  onClick={() => {
                    addToBookmark(quote);
                  }}
                  className={
                    isBookmarked
                      ? "bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-400 hover:font-bold"
                      : "bg-red-700 px-4 py-2 rounded-lg hover:bg-red-400 hover:font-bold"
                  }
                >
                  Add Bookmark
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading quote...</p>
        )}
      </div>

      <div className="">
        {tags.length > 0 && (
          <div
            className="text-md
              font-semibold
              "
          >
            <select
              className="rounded-lg
                px-3
                py-2"
              onChange={handleTagChange}
              value={selectedTag}
            >
              <option value="">Select Tag</option>
              {tags.map((tags) => (
                <option key={tags._id} value={tags.slug}>
                  {tags.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <button 
      // onClick={() => dispatch(getQuotes())}
      onClick={generateQuote}
       className="mt-8">
        <span className="text-white bg-green-600 rounded-md px-6 py-2 hover:bg-green-300 hover:text-black hover:font-bold ">
          Next Quote
        </span>
      </button>
    </div>
  );
};

export default Quote;
