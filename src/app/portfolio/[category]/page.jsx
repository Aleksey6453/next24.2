import React from 'react'

const page = ({params}) => {
  return (
    <div className='wrapPage'>
        <h1 className='title'>{params.category}</h1>  
    </div>
  )
}

export default page
