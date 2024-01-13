import React, { ReactNode } from 'react';
import Header from './header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='main-content-box'>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
