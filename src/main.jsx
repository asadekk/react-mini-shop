
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { LikeProvider } from './context/LikeContext.jsx'

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <LikeProvider>
            <RouterProvider router={router} />
        </LikeProvider>
    </CartProvider>
)
