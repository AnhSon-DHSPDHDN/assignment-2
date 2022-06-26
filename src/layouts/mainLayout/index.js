import React from 'react'
import './style.scss'

export default function MainLayout(props) {
  return (
    <div className='main main--layout'>
      {props.children}
    </div>
  )
}
