import React from 'react'
import './style.scss'

export default function FormTask({ isEdit = false }) {
  return (
    <div className='form'>
      <form>
        <div className='form__input'>
          <label htmlFor='title'>Title</label>
          <input type={'text'} id='title' placeholder='Input title task' />
        </div>
        <div className='form__input'>
          <label htmlFor='creator'>Creator</label>
          <input type={'text'} id='creator' placeholder='Input Creator' />
        </div>
        <div className='form__input'>
          <label htmlFor='create-at'>Create at</label>
          <input type={'text'} id='create-at' disabled placeholder='Input create at' />
        </div>
        <div className='form__input'>
          <label htmlFor='description'>Description</label>
          <input type={'text'} id='description' placeholder='Input description task' />
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
        {!isEdit && <button className='form__btn form__btn--save'>Save</button>}
      </form >
    </div >
  )
}
