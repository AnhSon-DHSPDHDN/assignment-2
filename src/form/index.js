import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import './style.scss'

export default function FormTask({
  isEdit = false,
  methods,
  onValid
}) {
  const [formState, setFormState] = useState({
    title: '',
    creator: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const { control, handleSubmit } = methods

  const handleOnChange = e => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value
    })
    setFormErrors({})
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (!formState.title || !formState.creator) {
      let validate = { ...formErrors }
      if (!formState.title) {
        validate = {
          ...validate,
          title: 'Title is required!'
        }
      }
      if (!formState.creator) {
        validate = {
          ...validate,
          creator: 'creator is required!'
        }
      }
      setFormErrors(validate)
      return;
    }

    console.log('submit');
    // Call submit
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmitForm}>
        <div className='form__input'>
          <label htmlFor='title'>Title</label>
          <input
            type={'text'}
            id='title'
            name='title'
            placeholder='Input title task'
            value={formState.title}
            onChange={handleOnChange}
          />
          {!!formErrors.title && <div>{formErrors.title}</div>}
        </div>
        <div className='form__input'>
          <label htmlFor='creator'>Creator</label>
          <input
            type={'text'}
            id='creator'
            name='creator'
            placeholder='Input Creator'
            value={formState.creator}
            onChange={handleOnChange}
          />
          {!!formErrors.creator && <div>{formErrors.creator}</div>}
        </div>
        {/* <div className='form__input'>
          <label htmlFor='create-at'>Create at</label>
          <Controller
            name='createAt'
            control={control}
            render={({ field }) => (
              <input
                type={'text'}
                id='createAt'
                disabled
                placeholder='Input create at'
                {...field}
              />
            )}
          />
        </div>
        <div className='form__input'>
          <label htmlFor='description'>Description</label>
          <Controller
            name='description'
            control={control}
            render={({ field }) => (<input
              type={'text'}
              id='description'
              placeholder='Input description task'
              {...field}
            />)}
          />
        </div>
        {isEdit && <>
          <div className='form__radio'>
            <input type="radio" id="html" name="status" value="HTML" />
            <label style={{ marginLeft: '10px' }} htmlFor="html">HTML</label>
            <input type="radio" id="css" name="status" value="CSS" />
            <label style={{ marginLeft: '10px' }} htmlFor="css">CSS</label>
            <input type="radio" id="javascript" name="status" value="JavaScript" />
            <label style={{ marginLeft: '10px' }} htmlFor="javascript">JavaScript</label>
          </div>
          <div style={{
            margin: '30px auto',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center'
          }}>
            <button className='form__btn'>Save</button>
            <button className='form__btn'>Reset</button>
            <button className='form__btn'>Delete</button>
          </div>
        </>
        } */}
        {!isEdit && <button
          type={'submit'}
          className='form__btn form__btn--save'
        >
          Save
        </button>}
      </form >
    </div >
  )
}
