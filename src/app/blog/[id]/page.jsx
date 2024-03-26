import React from 'react'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })

  if (!res.ok) {

    throw new Error('New error for you!')
  }
 
  return res.json()
}

const BlogId = async({params}) => {

  const data = await getData(params.id)

  return (
    <div className='wrapPage'>
      <h1>
        {data.title}
      </h1>
      <p>
        {data.body}
      </p>
    </div>
  )
}

export default BlogId
