import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ProductCard from '../../components/ProductCard';
import {getProducts} from '../../requests/products';
import {Link} from 'react-router-dom'
import s from './index.module.css'
import {LoginOutlined} from '@ant-design/icons'

export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  console.log(useParams()); // содержит объект в формате ключ-значение, ключ -> название переменной, указанное в пути в rout
  const {category_name} = useParams();
  // console.log(category_name);
  const category_name_up = category_name[0].toUpperCase() + category_name.slice(1);

  useEffect(() => {
    getProducts(setProducts, category_name)
  }, [])
  console.log(products);

  

  return (

    <div className='page'> 

        <p className={s.category_name}> {category_name_up} </p>

        <div className={s.products_container}>
          {
            products.map(el => <ProductCard key={el.id} {...el}/>)
          }
          <Link to='/categories' className={[s.link_container, s.category_name].join(' ')}>
            <LoginOutlined className={s.close_icon}/>
            <div>back to categories</div>
          </Link>  
        </div>
        
    </div>

  )
}
