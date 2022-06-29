import React from 'react'
import { Controller } from 'react-hook-form'
import './style.scss'

export default function FormTask({
  isEdit = false,
  methods,
  onValid
}) {
  const { control, handleSubmit } = methods

  return (
    <div className='form'>
      <form onSubmit={handleSubmit(onValid)}>
        <div className='form__input'>
          <label htmlFor='title'>Title</label>
          <Controller
            name='title'
            control={control}
            render={({ field }) => (<input
              type={'text'}
              id='title'
              placeholder='Input title task'
              {...field}
            />)}
          />
        </div>
        <div className='form__input'>
          <label htmlFor='creator'>Creator</label>
          <Controller
            name='creator'
            control={control}
            render={({ field }) => (<input
              type={'text'}
              id='creator'
              placeholder='Input Creator'
              {...field}
            />)}
          />
        </div>
        <div className='form__input'>
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
        }
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
