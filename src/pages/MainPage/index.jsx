import React from 'react'
import s from './index.module.css'

export default function MainPage() {
  return (
    <div className={['page', s.main_page].join(' ')}>
      <p>You are at the main page now.</p>
      <p>We are happy to see you in our shop!</p>
      <p>https://dummyjson.com/</p>
    </div>
  )
}
