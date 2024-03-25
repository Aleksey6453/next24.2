import React from 'react'
import Link from 'next/link'


export const metadata = {
  title: 'Blog',
  description: 'Blog page',
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const page = async () => {
  const data = await getData()

  return (
    <div className='wrapPage'>
       <h1 className='title'>
        Blog
      </h1>

      {data.map((item) => (
        <Link href='blog/test' key={item.id} className='gorizontal'>
          <div>
            <img src="/4.jpg" alt="img" width={400} className='m-10'/>
          </div>
          <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        </Link>
      ) )}
     
     
      {/* <Link href='blog/test2' key='2' className='gorizontal'>
        <div>
          <img src="/2.jpg" alt="img" width={400}/>
        </div>
        <div>
          <h1>Title</h1>
          <p>Body</p>
        </div>
      </Link> */}
    </div>
  )
}

export default page
