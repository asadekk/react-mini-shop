import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,

        async lazy() {
          const module = await import("./pages/Home");

          return {
            Component: module.default,
            loader: module.productsLoader,
          };
        },
      },

      {
        path: "products/category/:category",

        async lazy() {
          const module = await import("./pages/Products");

          return {
            Component: module.default,
            loader: module.productCategoryLoader,
          };
        },
      },

      {
        path: "product/:id",

        async lazy() {
          const module = await import("./pages/ProductDetail");

          return {
            Component: module.default,
            loader: module.loader,
          };
        },
      },

      {
        path: "cart",

        async lazy() {
          const module = await import("./pages/Cart");

          return {
            Component: module.default,
          };
        },
      },

      {
        path: "favorites",

        async lazy() {
          const module = await import("./pages/Wishlist");

          return {
            Component: module.default,
          };
        },
      },

      {
        path: "login",

        async lazy() {
          const module = await import("./pages/Login");

          return {
            Component: module.default,
          };
        },
      },

      {
        path: "register",

        async lazy() {
          const module = await import("./pages/Register");

          return {
            Component: module.default,
          };
        },
      },

      {
        path: "checkout",

        async lazy() {
          const module = await import("./pages/Checkout");

          return {
            Component: module.default,
          };
        },
      },
    ],
  },
]);

export default router;