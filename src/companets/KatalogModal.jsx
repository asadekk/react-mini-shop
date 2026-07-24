import React from 'react'
import '../css/KatalogModal.css'
import { NavLink } from 'react-router'
import {
  LayoutGrid,
  Sparkles,
  Wind,
  Sofa,
  ShoppingBasket,
  Home,
  UtensilsCrossed,
  Laptop,
  Shirt,
  Footprints,
  Watch,
  Smartphone,
  Bike,
  Droplet,
  Tablet,
  Car,
  ShoppingBag,
  Gem,
} from 'lucide-react'

const categories = [
  { to: '/products/category/beauty', label: 'Beauty', icon: Sparkles },
  { to: '/products/category/fragrances', label: 'Fragrances', icon: Wind },
  { to: '/products/category/furniture', label: 'Furniture', icon: Sofa },
  { to: '/products/category/groceries', label: 'Groceries', icon: ShoppingBasket },
  { to: '/products/category/home-decoration', label: 'Home Decoration', icon: Home },
  { to: '/products/category/kitchen-accessories', label: 'Kitchen Accessories', icon: UtensilsCrossed },
  { to: '/products/category/laptops', label: 'Laptops', icon: Laptop },
  { to: '/products/category/mens-shirts', label: "Men's Shirts", icon: Shirt },
  { to: '/products/category/mens-shoes', label: "Men's Shoes", icon: Footprints },
  { to: '/products/category/mens-watches', label: "Men's Watches", icon: Watch },
  { to: '/products/category/mobile-accessories', label: 'Mobile Accessories', icon: Smartphone },
  { to: '/products/category/motorcycle', label: 'Motorcycle', icon: Bike },
  { to: '/products/category/skin-care', label: 'Skin Care', icon: Droplet },
  { to: '/products/category/smartphones', label: 'Smartphones', icon: Smartphone },
  { to: '/products/category/sports-accessories', label: 'Sports Accessories', icon: Bike },
  { to: '/products/category/sunglasses', label: 'Sunglasses', icon: Sparkles },
  { to: '/products/category/tablets', label: 'Tablets', icon: Tablet },
  { to: '/products/category/tops', label: 'Tops', icon: Shirt },
  { to: '/products/category/vehicle', label: 'Vehicle', icon: Car },
  { to: '/products/category/womens-bags', label: "Women's Bags", icon: ShoppingBag },
  { to: '/products/category/womens-dresses', label: "Women's Dresses", icon: Shirt },
  { to: '/products/category/womens-jewellery', label: "Women's Jewellery", icon: Gem },
  { to: '/products/category/womens-shoes', label: "Women's Shoes", icon: Footprints },
  { to: '/products/category/womens-watches', label: "Women's Watches", icon: Watch },
]

function KatalogModal({close}) {
  return (
    <div className='modal-overlay'>
      <div className='catalog-modal'>
        <ul className='catalog-list'>
          {categories.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
              onClick={()=>close(false)}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive ? 'catalog-link active' : 'catalog-link'
                }
              >
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default KatalogModal