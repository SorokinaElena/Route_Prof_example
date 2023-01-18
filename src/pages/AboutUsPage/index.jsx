import React from 'react'
import s from './index.module.css'

export default function AboutUsPage() {
  return (
    <div className={['page', s.about_us_page].join(' ')}>
        Got tired of Lorem ipsum data?
With DummyJSON, what you get is different types of REST Endpoints filled with JSON data which you can use in developing the frontend with your favorite framework and library without worrying about writing a backend.
    </div>
  )
}
