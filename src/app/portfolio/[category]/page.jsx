import Button from '@/components/button/Button'
import React from 'react'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }
  return notFound()
}

const page = ({params}) => {
  const data = getData(params.category)
  return (
    <div className='wrapPage'>
        <h1 className='title'>{params.category}</h1>
        {data.map((item)=>(
          <div className="gorizontal gorizontalReverse" key={item.id}>
            <div>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <Button text='Pump please' url='/'/>
            </div>
            <div>
              <img src={item.image} alt={item.title} className='smallImg'/>
            </div>
          </div> 
        ))}

        {/* <div className="gorizontal gorizontalReverse" key='1'>
          <div>
            <h1>Title</h1>
            <p>Body</p>
            <Button text='Pump please' url='/'/>
          </div>
          <div>
            <img src="/hero.jpeg" alt="img" className='smallImg'/>
          </div>
        </div>  */}
    </div>
  )
}

export default page
