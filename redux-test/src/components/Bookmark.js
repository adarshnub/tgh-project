import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/bookmarkSlice";

const Bookmark = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.bookmark);



  const removeFromBookmark = (id) => {
    dispatch(remove(id));
    // const bookmarks = quotes.map((quote) => quote._id);
    // localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    // console.log(localStorage.getItem("bookmarked"));
  };

  // useEffect(()=> {
  //   const bookamrks = JSON.parse(localStorage.getItem("bookmarks"));
   
  //   if(bookamrks){
  //     bookamrks.forEach((id) => {
  //       dispatch(remove(id));
  //     })
  //   }
  // },[])



  const cards = quotes.map((quote) => (
    <div
      key={quote.id}
      className="bg-red-500
      mt-4
      rounded-lg
      w-3/4
      mx-auto
      opacity-50
    "
    >
      <div className="flex flex-col gap-6 ">
        <p className="text-white font-semibold">{quote.content}</p>
        {/* <h1 className="font-bold text-black">loading quote......</h1> */}
        <h4
          className="text-sm
        font-bold"
        >
          ~{quote.author}
        </h4>
        <button
          onClick={() => removeFromBookmark(quote.id)}
          className="bg-blue-500 px-4 py-2 rounded-lg font-bold
          hover:bg-blue-800 hover:text-white"
        >
          Remove Bookmark
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Bookmarks</h1>
      {cards}
    </div>
  );
};

export default Bookmark;
