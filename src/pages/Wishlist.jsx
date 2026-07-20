import React from 'react'
import { useLike } from '../context/LikeContext'
import ProductCord from '../companets/ProductCord';
import '../css/ProductCord.css'
function Wishlist() {
  const { like } = useLike()
  console.log( like );
  
  return (
    <div className='products'>
      {like.map((like)=>{
        return <ProductCord key={like.id} product={like}/>
      })}
    </div>
  )
}

export default Wishlist