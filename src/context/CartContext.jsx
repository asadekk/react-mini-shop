import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const count = cart.find((item) => item.id === product.id);
    if (count) {
      setCart(cart.map((item) => {
        return item.id === product.id ?
          { ...item, quantity: item.quantity + 1 } :
          item;
      }))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const pilusCart = (id) => {
    setCart(cart.map((item) => {
      return item.id === id ?
        { ...item, quantity: item.quantity + 1 } :
        item
    }))
  }

  const minusCart = (id) => {
    setCart(cart.map((item) => {
      return item.id === id ?
        {
          ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1
        } : item
    })) 
  }

  const deleteCart = (id) => {
    setCart(cart.filter((item)=> item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, pilusCart, minusCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);