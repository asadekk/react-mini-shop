import React from 'react'
import { useLoaderData } from 'react-router'
import ProductCord from '../companets/ProductCord'
export async function productCategoryLoader({params}) {
  const res = await fetch(`https://dummyjson.com/products/category/${params.category}`)
  const data = await res.json()
  return data.products
}
function Products() {
  const products = useLoaderData();

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCord
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Products