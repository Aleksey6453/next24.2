'use client'

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import { useState, useEffect } from 'react';

const DarkModelToggle = () => {
    // const mode = 'sun'
    // const {toggle, mode} = useContext(ThemeContext)
    const [theme, setTheme] = useState('sun'); // По умолчанию установим светлую тему

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
        setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'sun' ? 'moon' : 'sun';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

  return (
    <label className='toggle-label theme' onClick={toggleTheme}>
        <input type='checkbox'/>
        <span className='back'>
           <span className='toggle'></span>
           <span className='label on'>SUN</span>
           <span className='label off'>MOON</span>  
       </span>
   </label>
  )
}

export  {DarkModelToggle}
