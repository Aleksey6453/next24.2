import Button from '@/components/button/Button'
import React from 'react'

const page = ({params}) => {
  return (
    <div className='wrapPage'>
        <h1 className='title'>{params.category}</h1>
        <div className="gorizontal gorizontalReverse" key='1'>
          <div>
            <h1>Title</h1>
            <p>Body</p>
            <Button text='Pump please' url='/'/>
          </div>
          <div>
            <img src="/hero.jpeg" alt="img" className='smallImg'/>
          </div>
        </div> 
        <div className="gorizontal gorizontalReverse" key='2'>
          <div>
            <h1>Title</h1>
            <p>Body</p>
            <Button text='Pump please' url='/'/>
          </div>
          <div>
            <img src="/canser.jpg" alt="img" className='smallImg'/>
          </div>
        </div>   
        <div className="gorizontal gorizontalReverse" key='3'>
          <div>
            <h1>Title</h1>
            <p>Body</p>
            <Button text='Pump please' url='/'/>
          </div>
          <div>
            <img src="/canser2.jpg" alt="img" className='smallImg'/>
          </div>
        </div>   
        <div className="gorizontal gorizontalReverse" key='4'>
          <div>
            <h1>Title</h1>
            <p>Body</p>
            <Button text='Pump please' url='/'/>
          </div>
          <div>
            <img src="/canser4.jpg" alt="img" className='smallImg'/>
          </div>
        </div>   
    </div>
  )
}

export default page
