import { Outlet } from 'react-router-dom';
// компонент який є контейнером і рендерить в собі весь контент додатку
// import { Toaster } from 'react-hot-toast';
import { AppBar } from './Appbar/Appbar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
