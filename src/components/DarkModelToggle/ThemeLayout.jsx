'use client'

import { useState, useEffect } from 'react';

const ThemeLayout = ({ children }) => {
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
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </div>
  );
};

export {ThemeLayout};
