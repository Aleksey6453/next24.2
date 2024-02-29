import Link from 'next/link'

import React from 'react'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
        <button className='btn m-10'>
            {text}
        </button>
    </Link>
  )
}

export default Button
