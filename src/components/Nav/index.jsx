import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Nav() {
  return (
    <nav className={s.nav}>
        <Link to='/'>Main</Link>
        <Link to='categories'>Categories</Link>
        <Link to='about_us'>About us</Link>
    </nav>
  )
}
