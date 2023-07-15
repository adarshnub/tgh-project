import React, { useEffect, useState } from 'react';


const Quote = () => {
  const [quotes, getQuotes] = useState([]);
  useEffect(()=> {
      fetch('http://api.quotable.io/random')
      .then(data=>data.json())
      .then(result=> getQuotes([result]))
      .catch(error => console.error(error));
  },[]);

  const cards = quotes.map(quote => (
    <div>
      <div
      className="bg-red-400
    rounded-2xl
    min-h-[8rem]
    flex flex-col
    justify-center
    items-center
    gap-8
    text-white
    w-[17rem]
    sm:w-full
    px-4
    py-2
    ">
      
      <p>{quote.content}</p>
      {/* <h1 className="font-bold text-black">loading quote......</h1> */}
      <h4
        className="text-sm
        font-bold"
      >
        ~{quote.author}
      </h4>
      <button className='bg-blue-500 px-4 py-2 rounded-lg'>Add to Bookmarks</button>
    </div>
    </div>
  ))


  return (
    <>
    <h1>Quote</h1>
    <div>
      {cards}
    </div>
    </>
  )
}

export default Quote;