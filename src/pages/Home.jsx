import React from 'react'
import '../css/ProductCord.css'
import ProductCord from '../companets/ProductCord';
import { useLoaderData } from 'react-router';
import Navbar from '../companets/Navbar';

export async function productsLoader() {
  const res = await fetch("https://dummyjson.com/products");
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
      <Navbar products={products}/>
    </div>
  )
}

export default Home