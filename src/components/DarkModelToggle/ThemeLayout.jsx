'use client'

import { useTheme } from '../../context/ThemeContext';


const Layout = ({ children }) => {
  const { theme } = useTheme('sun');


  return <div className={`layout ${theme === 'sun' ? 'moon' : 'sun'}`}>
           {children}
        </div>;
};

export default Layout;
