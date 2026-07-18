import { useLoaderData } from "react-router";
import "../css/ProductCord.css";

function ProductCord() {
  const products = useLoaderData();

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-card__image-wrap">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-card__image"
            />

            <button className="product-card__like">
              ❤️
            </button>
          </div>

          <div className="product-card__body">
            <span className="product-card__original">
              ORIGINAL
            </span>

            <div className="product-card__price-row">
              <span className="product-card__price">
                ${product.price}
              </span>

              <span className="product-card__old-price">
                $
                {(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
            </div>

            <span className="product-card__installment">
              ${(product.price / 12).toFixed(2)} / oy
            </span>

            <p className="product-card__title">
              {product.title}
            </p>

            <div className="product-card__rating">
              <span className="product-card__star">★</span>
              <span>{product.rating}</span>
            </div>

            <button className="product-card__cta">
              🛒 Savatga qo'shish
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCord;