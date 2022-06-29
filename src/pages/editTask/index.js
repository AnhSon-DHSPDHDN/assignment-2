import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import FormTask from '../../form'
import { actGetTaskById } from '../../redux/actions/taskAction'
import { INITIAL_VALUES } from './constants'

export default function EditTask() {
  const { id } = useParams()
  const { taskDetail } = useSelector(state => state?.tasks)
  const history = useHistory()
  const dispatch = useDispatch()
  const methods = useForm({
    defaultValues: INITIAL_VALUES
  })

  useEffect(() => {
    dispatch(actGetTaskById(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!taskDetail) {
      history.push(ROUTES.ALL_TASK.path)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskDetail])

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
        // onValid={onValid}
        isEdit
      />
    </div >
  )
}
