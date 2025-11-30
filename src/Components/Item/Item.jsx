import React from 'react'
import { Link } from 'react-router-dom'  
import './Item.css'
function Item(props) {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item_prices">
        <div className="new_price">
            ${props.new_price}
        </div>
        <div className="old_price">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
