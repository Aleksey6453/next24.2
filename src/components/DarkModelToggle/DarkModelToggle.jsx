'use client'

import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

//   return <button onClick={toggleTheme}>Toggle Theme</button>;

  return (
    <label className='toggle-label theme' >
        <input type='checkbox' onClick={toggleTheme}/>
        <span className='back'>
           <span className='toggle'></span>
           <span className='label on'>SUN</span>
           <span className='label off'>MOON</span>  
       </span>
   </label>
  )
};

export {ThemeToggle};



