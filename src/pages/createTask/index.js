import React from 'react'
import FormTask from '../../form'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { INITIAL_VALUES } from './constants'
import { useHistory } from 'react-router-dom'
import { actAddNewTask } from '../../redux/actions/taskAction'
import { ROUTES } from '../../constants/routes'
import format from 'date-fns/format'
import { yupResolver } from '@hookform/resolvers/yup'
import { addSchema } from '../../form/validates'

export default function CreateTask() {
  const dispatch = useDispatch()
  const history = useHistory()
  const methods = useForm({
    defaultValues: { ...INITIAL_VALUES, createAt: format(new Date(), 'yyyy/MM/dd HH:mm') },
    resolver: yupResolver(addSchema)
  })

  const onValid = (values, e) => {
    e.preventDefault()
    dispatch(actAddNewTask(values))
    history.push(ROUTES.ALL_TASK.path)
  }

  return (
    <div style={{
      padding: '20px',
      height: 'max-content',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px'
    }}>
      <FormTask
        methods={methods}
        onValid={onValid}
      />
    </div >
  )
}
