import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/card'
import { actGetAllTasks } from '../../redux/actions/tasksListAct'
import './style.scss'

export default function AllTask() {
  const tasksList = useSelector(state => state?.tasks?.tasksList)
  const dispatch = useDispatch()
  console.log(tasksList);

  useEffect(() => {
    dispatch(actGetAllTasks())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='all-task'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
