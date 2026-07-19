
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
)
