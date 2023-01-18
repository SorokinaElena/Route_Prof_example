import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import s from './index.module.css'
import { getCategoryImages } from '../../requests/category_images';

export default function CategoryCard({category}) {

  const category_up = category[0].toUpperCase() + category.slice(1);

  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    getCategoryImages(setCategoryImages, category)
  }, [])
  
  console.log(categoryImages);

  const category_style = {
    width: `100%`,
    height: `100%`,
    borderRadius: `12px`,
    backgroundImage: `url(${categoryImages})`,
    opacity: 0.7,
    // backgroundSize: 'cover',
    objectFit: `cover`,
    objectPosition: `center`,
  }

  return (
    <Link to={category} className={s.category_card} >
      <div style={category_style}></div>
      <div className={s.category_name}>{category_up}</div>  
    </Link>
  )
}