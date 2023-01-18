import React, {useState, useEffect} from 'react'
import CategoryCard from '../../components/CategoryCard';
import { getCategories } from '../../requests/categories'
import s from './index.module.css'

export default function CategoriesPage() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories)
  }, []) // принимает функцию и состояние, которое нужно отслеживать

  // console.log(categories);

  return (
    <div className={['page', s.categories_page].join(' ')}>
      {
        categories.map((el, index) => <CategoryCard key={index} category={el} />)
      }
    </div>
  )
}
