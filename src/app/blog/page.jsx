import React from 'react'
import Link from 'next/link'


export const metadata = {
  title: 'Blog',
  description: 'Blog page',
}

const page = () => {
  return (
    <div className='wrapPage'>
      <h1 className='title'>
        Blog
      </h1>
      <Link href='blog/test' key='1' className='gorizontal'>
        <div>
          <img src="/4.jpg" alt="img" width={400}/>
        </div>
        <div>
          <h1>Title</h1>
          <p>Body</p>
        </div>
      </Link>
      <Link href='blog/test2' key='2' className='gorizontal'>
        <div>
          <img src="/2.jpg" alt="img" width={400}/>
        </div>
        <div>
          <h1>Title</h1>
          <p>Body</p>
        </div>
      </Link>
    </div>
  )
}

export default page
