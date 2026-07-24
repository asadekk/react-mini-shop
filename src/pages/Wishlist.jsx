import React from 'react'
import { useLike } from '../context/LikeContext'
import ProductCord from '../companets/ProductCord';
import '../css/ProductCord.css'
import { Link } from 'react-router';
function Wishlist() {
  const { like } = useLike()
  console.log(like);

  return (
    <div className='products'>
      {like.length === 0 ? <div className="empty-wishlist">
        <h2>❤️ Wishlist </h2>
      </div> :
        like.map((like) => {
          return <ProductCord key={like.id} product={like} />
        })}
    </div>
  )
}

export default Wishlist