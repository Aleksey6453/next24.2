import React from 'react'
import Link from '../../../node_modules/next/link'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio page',
}

const page = () => {
  return (
    <div className='wrapPage'>
      <h1 className='title'>
        Portfolio
      </h1>
      <div className="items">
        <Link href='portfolio/ilustrations' className='item'>
          <span className='title'>Ilustrations</span>
        </Link>
        <Link href='portfolio/websites' className='item'>
          <span className='title'>Websites</span>
        </Link>
        <Link href='portfolio/aplications' className='item'>
          <span className='title'>Aplications</span>
        </Link>
      </div>
    </div>
  )
}

export default page
