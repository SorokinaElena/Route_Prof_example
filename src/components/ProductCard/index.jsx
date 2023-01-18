import React from 'react'
import s from './index.module.css'
import {Link} from 'react-router-dom'

export default function ProductCard({id, title, brand, images, price}) {
  return (
    <Link to={`/products/${id}`} className={s.product_card}>
        <p>{brand}</p>
        <p>{title}</p>
        <img src={images[0]} alt={title} />
        <p> <span>Price: </span>{price}$</p>
    </Link>
  )
}
