'use client'

import { useTheme } from '../../context/ThemeContext';
import styles from './page.module.css'; 

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return <div className={`layout ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
           {children}
        </div>;
};

export default Layout;
