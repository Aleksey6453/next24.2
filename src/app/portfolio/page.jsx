import React from 'react'
import Link from '../../../node_modules/next/link'

const page = () => {
  return (
    <div className='wrapPage'>
      <h1 className='title'>
        Portfolio
      </h1>
      <div className="imgItems">
        <Link href='/portfolio/ilustrations' className='imgItem'>
          <span className='title'>Ilustrations</span>
        </Link>
      </div>
    </div>
  )
}

export default page
