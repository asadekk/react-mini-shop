import { createBrowserRouter } from "react-router";

import MainLayout from "./layouts/MainLayout";

import Products, { productCategoryLoader } from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Home, { productsLoader } from "./pages/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: productsLoader,
      },
      {
        path: "/products/category/:category",
        element: <Products />,
        loader: productCategoryLoader,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favorites",
        element: <Wishlist />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router