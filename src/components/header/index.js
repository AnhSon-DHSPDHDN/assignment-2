import React from 'react'
import './style.scss'

export default function Header() {
  return (
    <div className='header header-container'>
      <button className='btn btn--header'>Create New Task</button>
      <div style={{
        display: 'flex',
        gap: '20px'
      }}>
        <input className='input input--header' type={'text'} placeholder={'Type some thing to search...'} />
        <button className='btn btn--header'>Search</button>
      </div>
    </div>
  )
}
