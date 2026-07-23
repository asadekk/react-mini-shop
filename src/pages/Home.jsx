import React from 'react'
import '../css/ProductCord.css'
import ProductCord from '../companets/ProductCord';
import { useLoaderData } from 'react-router';



export async function productsLoader({ request }) {
  const url = new URL(request.url)

  const search = url.searchParams.get("search") || "";

  const api = search 
  ? `https://dummyjson.com/products/search?q=${search}` 
  : `https://dummyjson.com/products`

  const res = await fetch(api);
  const data = await res.json();

  return data.products;
}

function Home() {
  const products = useLoaderData()
  return (
    <div className='products'>
      {products.map((product) => (
        <ProductCord
          key={product.id}
          product={product}
        />

      ))}
    </div>
  )
}

export default Home