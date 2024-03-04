import React from 'react'
import Link from '../../../node_modules/next/link'

const page = () => {
  return (
    <div className='wrapPage'>
      <h1 className='title'>
        Portfolio
      </h1>
      <div className="items">
        <Link href='/portfolio/ilustrations' className='item'>
          <span className='title'>Ilustrations</span>
        </Link>
        <Link href='/portfolio/ilustrations' className='item'>
          <span className='title'>Ilustrations</span>
        </Link>
        <Link href='/portfolio/ilustrations' className='item'>
          <span className='title'>Ilustrations</span>
        </Link>
      </div>
    </div>
  )
}

export default page
