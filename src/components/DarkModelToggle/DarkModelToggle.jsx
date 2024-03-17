import React from 'react'


const DarkModelToggle = () => {
    const mode = 'sun'
  return (
    <label class='toggle-label'>
        <input type='checkbox'/>
        <span class='back'>
           <span class='toggle'></span>
           <span class='label on'>SUN</span>
           <span class='label off'>MOON</span>  
       </span>
   </label>
  )
}

export  {DarkModelToggle}
