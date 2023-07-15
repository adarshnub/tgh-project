import React, { useEffect, useState } from 'react';

const Quote = () => {
    const [products, getProducts] = useState([]);
    useEffect(()=>{
        fetch('http://api.quotable.io/random')
        .then(data => data.json())
        .then(result => getProducts(result))
    },[]);

  return (
    <>
    <h1>Product Dashboard</h1>
    {JSON.stringify(products)}
    </>
  )
}

export default Quote;