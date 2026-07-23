
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { LikeProvider } from './context/LikeContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <SearchProvider>
            <LikeProvider>
                <RouterProvider router={router} />
            </LikeProvider>
        </SearchProvider>
    </CartProvider>
)
