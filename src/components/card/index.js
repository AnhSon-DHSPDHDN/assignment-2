import React from 'react'
import { useHistory, generatePath } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './style.scss'

export default function Card({ task }) {
  const history = useHistory()

  const handleRedirectToEdit = (id) => {
    history.push(generatePath(ROUTES.EDIT_TASK.path, {
      id: id
    }))
  }

  return (
    <div className='card-container' onClick={() => handleRedirectToEdit(task?.id)}>
      <h5>Title: {task?.title}</h5>
      <p>Creator: {task?.creator}</p>
      <p className='status'>Status: {task?.status}</p>
      <hr />
      <h5>Description: </h5>
      <p className='description'>{task?.description}</p>
    </div>
  )
}
