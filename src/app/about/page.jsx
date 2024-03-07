import React from 'react'
import Image from 'next/image'


export const metadata = {
  title: 'About',
  description: 'About page',
}

const page = () => {
  return (
    <div className='wrapPage'>
      <h1 className='title'>
        About
      </h1>
      <Image src='https://goloe.me/uploads/posts/2021-12/1639895124_20-goloe-me-p-erotika-kharuna-khana-siski-47.jpg' 
             alt='image'
            //  fill={true}
           width={500}
           height= {700}
             />
    </div>
  )
}

export default page
