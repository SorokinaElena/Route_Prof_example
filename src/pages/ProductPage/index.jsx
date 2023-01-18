import React, {useState, useEffect} from 'react'
import s from './index.module.css'
import {getProduct} from '../../requests/product'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import {LogoutOutlined} from '@ant-design/icons'

export default function ProductPage() {

    const [product, setProduct] = useState({})

    const {product_id} = useParams();
    // console.log(useParams()) 
    // console.log(product_id)

    useEffect(() => {
        getProduct(setProduct, product_id)
    }, [])

    console.log(product)

    const {title, description, price, discountPercentage, rating, stock, images, category} = product;

  return (

    <div className={['page', s.product_page].join(' ')}>
        <Link to={`/categories/${category}`} className={s.close_icon}><LogoutOutlined /></Link>
        <div className={s.images_container}>
            {images ? <img src={images[0]} alt={title} /> : <p>{title}</p>}
        </div>
        <div className={s.descr_container}>
            <p className={s.title}>{title}</p>
            <p>{description}</p>
            <p>Price: <span>{price} $</span> </p>
            <p>In stock: {stock}</p>
        </div>
        
    </div>
  )
}

// button_right.addEventListener('click', (event) => {
//     photo.src = photos_array[++photoIndex % photos_array.length]
// });

// button_left.addEventListener('click', (event) => {
//     if(photoIndex === 0) {
//         photoIndex = photos_array.length;
//     }
//     photo.src = photos_array[--photoIndex % photos_array.length]
// });