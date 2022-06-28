import React from 'react'
import './style.scss'

export default function Card({ task }) {
  return (
    <div className='card-container'>
      <h5>Title: {task?.title}</h5>
      <p>Creator: {task?.creator}</p>
      <p className='status'>Status: {task?.status}</p>
      <hr />
      <h5>Description: </h5>
      <p className='description'>{task?.description}</p>
    </div>
  )
}
