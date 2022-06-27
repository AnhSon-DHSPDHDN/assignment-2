import React from 'react'
import './style.scss'

export default function Card() {
  return (
    <div className='card-container'>
      <h5>Title: Task ne</h5>
      <p>Creator: Son</p>
      <p className='status'>Status: New</p>
      <hr />
      <h5>Description: </h5>
      <p className='description'>some thing to task, info task some thing to task, info task some thing to task, info task some thing to task, info task</p>
    </div>
  )
}
