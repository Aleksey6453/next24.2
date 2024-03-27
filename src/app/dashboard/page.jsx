'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

// export const metadata = {
//   title: 'Dashboard',
//   description: 'Dashboard page',
// }

const page = () => {
  // const [data, setData] = useState([])
  // const [error, setError] = useState(false)
  // const [loading, setLoading] = useState(false)

  // useEffect(()=>{
  //   const getData = async()=>{
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

  //     if (!res.ok) {
  //       setError(true)
  //     }
  //     setLoading(true)

  //     const data = await res.json()
  //     setData(data)
  //     setLoading(false)
  //   }
  //   getData()
  // }, [])

  // console.log(data)

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log(data)

  return (
    <div className='wrapPage'>
      <h1 className='title'>
        Dashboard
      </h1>
    </div>
  )
}

export default page
