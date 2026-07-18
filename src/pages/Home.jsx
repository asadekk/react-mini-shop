import React from 'react'
import ProductCord from '../companets/ProductCord';

export async function productsLoader() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return data.products;
}

function Home() {
  return (
    <div>
      <ProductCord/>
    </div>
  )
}

export default Home