import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../components/card'
import { actGetAllTasks } from '../../redux/actions/taskAction'
import './style.scss'

export default function AllTask() {
  const tasksList = useSelector(state => state?.tasks?.tasksList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actGetAllTasks())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='all-task'>
      {!!tasksList.length && tasksList.map((task, index) => {
        return <Card key={index} task={task} />
      })}
    </div>
  )
}
