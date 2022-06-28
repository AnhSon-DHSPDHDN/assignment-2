import React from 'react'
import FormTask from '../../form'

export default function CreateTask() {
  return (
    <div style={{
      padding: '20px',
      height: 'max-content',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px'
    }}>
      <FormTask />
    </div >
  )
}
