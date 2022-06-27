import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './style.scss'

export default function Sidebar() {
  return (
    <div className='sidebar sidebar-container'>
      <ul>
        <li><Link to={ROUTES.ALL_TASK.path}>{ROUTES.ALL_TASK.name}</Link></li>
        <li><Link to={ROUTES.NEW_TASK.path}>{ROUTES.NEW_TASK.name}</Link></li>
        <li><Link to={ROUTES.DOING_TASK.path}>{ROUTES.DOING_TASK.name}</Link></li>
        <li><Link to={ROUTES.DONE_TASK.path}>{ROUTES.DONE_TASK.name}</Link></li>
      </ul>
    </div >
  )
}
