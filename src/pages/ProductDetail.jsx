import React from 'react'
import '../css/ProductDetail.css'
import { useLoaderData, useParams } from 'react-router'
export async function loader({ params }) {
  const res = await fetch(
    `https://dummyjson.com/products/${params.id}`
  );

  return res.json();
}
function ProductDetail() {
  const { id } = useParams()
  const product = useLoaderData()
  console.log(product);

  return (
    <div className="product-detail">
      <div className="product-detail-card">

        <div className="product-detail-image">
          <img src={product.thumbnail} alt={product.title} />

          <button className="product-card__like">
            ❤️
          </button>
        </div>

        <div className="product-detail-info">
          <h1>{product.title}</h1>

          <p className="product-detail-rating">
            ⭐ {product.rating}
          </p>

          <h2 className="product-detail-price">
            ${product.price}
          </h2>

          <p className="product-detail-old">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
          </p>

          <span className="product-detail-installment">
            ${(product.price / 12).toFixed(2)} / oy
          </span>

          <p className="product-detail-description">
            {product.description}
          </p>

          <div className="product-detail-buttons">
            <button className="cart-btn">
              🛒 Savatga qo'shish
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail