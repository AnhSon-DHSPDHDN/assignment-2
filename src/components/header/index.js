import React from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './style.scss'

export default function Header() {
  const history = useHistory()

  return (
    <div className='header header-container'>
      <button
        className='btn btn--header'
        onClick={() => history.push(ROUTES.CREATE_TASK.path)}
      >
        Create New Task
      </button>
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
