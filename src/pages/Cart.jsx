import React from "react";
import { useCart } from "../context/CartContext";
import '../css/Cart.css'
function Cart() {
  const { cart } = useCart();

  return (
   <div className="cart-container">
  {cart.length === 0 ? (
    <h2 className="empty-cart">Savat bo'sh</h2>
  ) : (
    cart.map((product) => (
      <div className="cart-item" key={product.id}>
        <img src={product.thumbnail} alt={product.title} />

        <div className="cart-info">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>

        {/* <button className="cart-remove">
          O'chirish
        </button> */}
      </div>
    ))
  )}
</div>
  );
}

export default Cart;