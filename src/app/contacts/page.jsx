import Button from '@/components/button/Button'
import React from 'react'

export const metadata = {
  title: 'Contacts',
  description: 'Contacts page',
}

const page = () => {
  return (
    <div className='wrapPage'>
      <h1 className='title'>
        Contacts
      </h1>
      <form action="" className='form'>
        <input type="text" placeholder='name' className='input' />
        <input type="text" placeholder='email' className='input' />
        <textarea placeholder='message' cols="30" rows="10" className='input'></textarea>
        <Button url='#' text='Send' />
      </form>
    </div>
  )
}

export default page
